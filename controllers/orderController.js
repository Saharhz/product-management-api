import { products, orders } from "../data/store.js";

const getNextOrderId = () => {
  return orders.length ? Math.max(...orders.map((o) => o.id)) + 1 : 1;
};

export const getOrders = (request, response) => {
  response.json(orders);
};

export const createOrder = (request, response) => {
  const { productId, quantity } = request.body;

  if (!productId || quantity == null || quantity <= 0) {
    return response.status(400).json({ message: "Invalid order data" });
  }

  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return response.status(404).json({ message: "Product not found" });
  }

  if (product.quantity > quantity) {
    return response.status(400).json({ message: "Not available" });
  }

  product.quantity -= quantity;

  const newOrder = {
    id: getNextOrderId(),
    productId: product.id,
    quantity,
    total: product.price * quantity,
    date: new Date().toISOString(),
  };

  orders.push(newOrder);
  response.status(201).json(newOrder);
};
