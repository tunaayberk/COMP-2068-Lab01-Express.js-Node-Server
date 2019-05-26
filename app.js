const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.use(express.static("media"));

app.listen(PORT, () => console.log("Port 4000 is listened"));
