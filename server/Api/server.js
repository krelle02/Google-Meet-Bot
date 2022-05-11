const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;
const postRoutes = require("./posts");

const app = express();

app.use(express.json());

app.use("/posts", postRoutes);

app.get("/api", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
