const express = require("express");
const bodyParser = require("body-parser");

const PORT = 4000;
const postRoutes = require("./posts");

const app = express();

app.use(bodyParser.json());

app.use("/posts", postRoutes);

app.get("/get", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("server is running...");
});
