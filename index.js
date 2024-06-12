const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, "public")));

// Route untuk halaman utama
app.get("/", (req, res) => {
  console.log("serving index.html");
  res.sendFile(__dirname + "/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "publik/login.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
