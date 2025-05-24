import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
