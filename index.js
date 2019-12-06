// NOTE: (12/6/19) code was working (outputting password hash), then I copied and pasted in Eduardo's code. Now output is an empty array.

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
        response.sendStatus(200);
      } else {
        response.sendStatus(404);
      }
    });
  } else if (request.body.type === "registration") {
    model
      .createAccount(request.body)
      .then(results => {
        if (results === null) {
          response.sendStatus(500);
        } else {
          response.sendStatus(200);
        }
      })
      .catch(error => {
        console.log(error);
        response.sendStatus(404);
      });
  }
});
