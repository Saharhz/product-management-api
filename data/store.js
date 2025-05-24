export let products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop",
    price: 1200,
    quantity: 10,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 800,
    quantity: 25,
    createdAt: new Date().toISOString(),
  },
];

export let orders = [
  {
    id: 1,
    products: [1],
    totalPrice: 2400,
    createdAt: new Date().toISOString(),
  },
];
