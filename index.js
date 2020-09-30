const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.post("/", (req, res) => {
  const body = req.body;

  console.log(body);

  res.send("2post!");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}.....`);
});
