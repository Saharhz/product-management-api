// Simulated product data
export let products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop",
    price: 1200,
    quantity: 10,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 800,
    quantity: 25,
  },
];

// Simulated order data
export let orders = [
  {
    id: 1,
    productId: 1,
    quantity: 2,
    total: 2400,
    date: new Date().toISOString(),
  },
];
