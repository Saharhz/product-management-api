import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Received GET /");
  res.send("It works!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Keep the process alive explicitly
setInterval(() => {}, 1000); // ⬅️ this prevents Node from exiting
