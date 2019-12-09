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

// async function searchDB(searchCriteria) {
//     return new Promise((resolve, reject) => {
//         accountModel.find(searchCriteria, (error, results) => {});
//     });
// }

async function checkLogin(username, password) {
  let hashedAndSaltedPassword = md5(password + auth.getSalt());
  console.log(hashedAndSaltedPassword);

  let searchCriteria = {
    username: username,
    password: hashedAndSaltedPassword
  };

  return accountModel.find(searchCriteria).exec();
}

async function createAccount(newAccount) {
  //FIX
  return checkLogin(newAccount.username, newAccount.password).then(results => {
    if (results.length >= 1) {
      return null;
    } else {
      let account = new accountModel({
        fname: newAccount.fname,
        lname: newAccount.lname,
        username: newAccount.username,
        email: newAccount.email,
        password: md5(newAccount.password + auth.getSalt()),
        creationDate: new Date(),
        lastLogin: new Date(),
        projectID: Math.floor(Math.random() * 1000000 + 1)
      });
      // FIX
      let temp = account.save();
      console.log(temp);
      return temp;
    }
  });
}

module.exports = {
  checkLogin: checkLogin,
  createAccount: createAccount
};
