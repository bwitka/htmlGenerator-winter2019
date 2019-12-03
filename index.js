// require index.js file
const auth = require("./assets/auth.js");

// import express (after npm install express)
const express = require("express");

// create new express app and save it as "app"
const app = express();

// Include the HTTP package (a built-in), then attach the Express server object to the HTTP object.
const http = require("http").Server(app);

// Create a variable that will hold the port number we want to use.
const port = 3000;

// Include Body Parser, which comes with Express.js.
const bodyParser = require("body-parser");

// Pass the port variable to the listen function for the HTTP server.
http.listen(port);

// Message to tell the developer that Express.js is now running.
console.log(`Express server now running on port ${port}!`);

console.log(auth.getDBURL());

/***** ROUTES ******/
// Directory to load when someone requests the route name.
app.use(express.static("client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post(path, callback [, callback ...])
// note: using shorthand for request and response [i.e. req, res]
app.post("/login", (req, res) => {
  let requestUsername = req.body;
  let requestPassword = req.body;

  console.log(requestUsername, requestPassword);

  response.sendStatus(200);
});
