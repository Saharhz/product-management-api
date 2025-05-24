import { products, orders } from "../data/store.js";

const getNextOrderId = () => {
  return orders.length ? Math.max(...orders.map((o) => o.id)) + 1 : 1;
};

export const getOrders = (request, response) => {
  response.json(orders);
};

export const createOrder = (request, response) => {
  const { productIds } = request.body;

  if (!Array.isArray(productIds) || productIds.length === 0) {
    return response
      .status(400)
      .json({ message: "Order must contain product ID" });
  }

  let totalPrice = 0;
  const includedProducts = [];

  for (const id of productIds) {
    const product = products.find((p) => p.id === id);
    if (!product) {
      return response
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    }

    totalPrice += product.price;
    includedProducts.push(product.id);
  }

  const newOrder = {
    id: getNextOrderId(),
    products: includedProducts,
    totalPrice,
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);
  return response.status(201).json(newOrder);
};
