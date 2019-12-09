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
  if (request.body.type === "login") {
    let requestUsername = request.body.username;
    let requestPassword = request.body.password;

    model.checkLogin(requestUsername, requestPassword).then(results => {
      console.log(results);
      console.log(requestUsername + "Inside of Promise");

      if (results.length === 1) {
        response.send({ success: 0 });
      } else {
        response.send({ success: 1 });
      }
    });
  } else if (request.body.type === "registration") {
    model
      .createAccount(request.body)
      .then(results => {
        if (results === null) {
          response.send({ success: 3 });
        } else {
          response.send({ success: 2 });
        }
      })
      .catch(error => {
        console.log(error);
        response.send({ success: 4 });
      });
  }
});
