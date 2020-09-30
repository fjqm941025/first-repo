const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.options("/", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  res.send(200);
});

app.post("/", (req, res) => {
  const body = req.body;

  console.log(body);

  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  res.send("2post!");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}.....`);
});
