const md5 = require("md5");

let passwordToHash = "123456";
let salt = "There were 10 cows on the prairie!";

//123456

console.log(md5(md5(passwordToHash) + salt));
