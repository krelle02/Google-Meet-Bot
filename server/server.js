const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is running...");
});
