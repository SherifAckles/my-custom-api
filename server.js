const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Endpoint to Get a list of users
app.get("/getUsers", function (req, res) {
  const filePath = path.join(process.cwd(), "users.json");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log(data);
      const formattedData = JSON.stringify(JSON.parse(data), null, 2);
      res.send(`<pre>${formattedData}</pre>`);
    }
  });
});

// Route handler for the root URL
app.get("/", function (req, res) {
  const filePath = path.join(process.cwd(), "users.json");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log(data);
      const formattedData = JSON.stringify(JSON.parse(data), null, 2);
      res.send(`<pre>${formattedData}</pre>`);
    }
  });
});

// Create a server to listen at port 8080
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`REST API demo app listening at http://${host}:${port}`);
});
