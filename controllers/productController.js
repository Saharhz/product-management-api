import { products } from "../data/store.js";

const getNextId = () => {
  return products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
};

export const getProducts = (request, response) => {
  response.json(products);
};

export const getProductById = (request, response) => {
  const product = products.find((p) => p.id === parseInt(request.params.id));
  if (!product)
    return response.status(404).json({ message: "Product not found" });
  response.json(product);
};

export const createProduct = (request, response) => {
  console.log("POST /products body:", request.body);

  const { name, description, price, quantity } = request.body;

  if (!name || !price || quantity == null) {
    return response.status(400).json({ message: "Missing required fields" });
  }

  const newProduct = {
    id: getNextId(),
    name,
    description: description || "",
    price,
    quantity,
  };

  products.push(newProduct);
  response.status(201).json(newProduct);
};

export const updateProduct = (request, response) => {
  const product = products.find((p) => p.id === parseInt(request.params.id));
  if (!product)
    return response.status(404).json({ message: "product not found" });

  const { name, description, price, quantity } = request.body;
  if (name !== undefined) product.name = name;
  if (description !== undefined) product.description = description;
  if (price !== undefined) product.price = price;
  if (quantity !== undefined) product.quantity = quantity;

  response.json(product);
};

export const deleteProduct = (request, response) => {
  const index = products.findIndex((p) => p.id === parseInt(request.params.id));
  if (index === -1) {
    return response.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  response.json({ message: "Product deleted" });
};
