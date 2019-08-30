const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up express app
const app = express();
const api = require("./routes/api");
const path = require("path");

// Log requests to the console
app.use(logger("dev"));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use(function(req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.use("/api", api);

const port = parseInt(process.env.PORT, 10) || 3000;
app.set("port", port);
const server = http.createServer(app);
if (process.env.NODE_ENV !== "test") {
  server.listen(port);
  console.log(`API escuchando en el puerto ${port} 😎`)
}
module.exports = app;
