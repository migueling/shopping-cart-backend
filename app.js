const express = require("express");
const Cart = require("./src/Cart");
const app = express();
const port = process.env.PORT || 4000;

const cart = new Cart();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido SWE Best Practices 2024! Edited" });
});

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

module.exports = { app, server };
