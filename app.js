require("dotenv").config();
const express = require("express");
const app = express();
const dbconnect = require("./config/dbconnect");
const router = require("./router/routes");
const port = 8080;
const hostname = "127.0.0.1";

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

dbconnect()
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
