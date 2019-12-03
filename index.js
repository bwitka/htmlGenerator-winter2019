// import express (after npm install express)
const express = require("express");

// create new express app and save it as "app"
const app = express();

// Include the HTTP package (a built-in), then attach the Express server object to the HTTP object.
const http = require("http").Server(app);

// Create a variable that will hold the port number we want to use.
const port = 3000;

// Pass the port variable to the listen function for the HTTP server.
http.listen(port);

// Include Body Parser, which comes with Express.js.
const bodyParser = require("body-parser");

// Message to tell the developer that Express.js is now running.
console.log(`Express server now running on port ${port}!`);

// Directory to load when someone requests the route name.
app.use(express.static("client/"));
