$(document).ready(() => {
  //console.log( ( CryptoJS.MD5("hello") ).toString() );
  $("#submitLogin").click(() => {
    let username = $("#username").val();
    let password = $("#password").val();

    if (username === "" || username === " ") {
      $("#error").text("Please type in a username!");
    }
    if (password === "" || password === " ") {
      $("#error").text("Please type in a password!");
    }
    // Structure of login package
    const loginData = {
      type: "login",
      username: username,
      password: CryptoJS.MD5(password).toString()
    };
    console.log(loginData.password);
    $.post("http://localhost:3000/login", loginData, data => {
      if (data.success === 0) {
        $("#login-message").text("You have successfully logged in!");
        setInterval(() => {
          window.location.href = "http://localhost:3000/profile.html";
        }, 1000);
      } else if (data.success === 1) {
        $("#login-message").text(
          "Sorry, wrong username or password! Try Again."
        );
      }
    });
  });
  $("#submitRegister").click(() => {
    const registerData = {
      type: "registration",
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      username: $("#username-register").val(),
      email: $("#email").val(),
      password: CryptoJS.MD5($("#password-register").val()).toString()
    };
    $.post("/login", registerData, data => {
      if (data.success === 2) {
        $("#register-message").text(
          "You have successfully registered an account! Log in today!"
        );
      } else if (data.success === 3) {
        $("#register-message").text("Sorry, username already taken!");
      } else if (data.success === 4) {
        $("#register-message").text(
          "Sorry, something went wrong! Try again later."
        );
      }
    });
  });
});
