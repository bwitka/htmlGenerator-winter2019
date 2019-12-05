const model = require("./model.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);
console.log("Express server running on " + port);

// routes
app.use(express.static("client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (request, response) => {
  let requestUsername = request.body.username;
  let requestPassword = request.body.password;

  model.checkLogin(requestUsername, requestPassword).then(results => {
    console.log(results);
    response.sendStatus(200);
  });

  //response.sendStatus(200);
});
