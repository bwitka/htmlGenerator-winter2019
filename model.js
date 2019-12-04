const auth = require("./assets/auth.js");
const mongoose = require("mongoose");
const md5 = require("md5");

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

mongoose.connect(auth.getDBURL(), options, error => {
  if (error) {
    console.log("Something happened at MongoDB Headquarters: " + error.reason);
  } else {
    console.log("Connected to MongoDB Atlas!");
  }
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error: "));

mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;

let accountSchema = new Schema({
  fname: String,
  lname: String,
  username: String,
  email: String,
  password: String,
  creationDate: Date,
  lastLogin: Date,
  projectID: String
});

let accountModel = new mongoose.model("accounts", accountSchema);

function checkLogin(username, password) {
  let hashedAndSaltedPassword = md5(password + auth.getSalt());

  let searchCriteria = {
    username: username,
    password: hashedAndSaltedPassword
  };

  accountModel.find(searchCriteria, (error, results) => {
    if (error) {
      console.log(error.reason);
    } else {
      if (results.length === 0) {
        console.log("Wrong username or password!");
      } else if (results.length === 1) {
        console.log("Successfully Logged In!");
      } else {
        console.log(
          "We have two entries that match the username and password, this is a DB issue!"
        );
      }
    }
  });
}

module.exports = {
  checkLogin: checkLogin
};
