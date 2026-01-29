const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: "$800" },
    { id: 2, name: "Phone", price: "$500" },
    { id: 3, name: "Headphones", price: "$100" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
