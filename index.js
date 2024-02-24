var email = document.querySelector("#email");
var password = document.querySelector("#password");

document.querySelector(".login-btn").addEventListener("click", function() {
    if (email.value === "" || password.value === "") {
        alert("Fill in the values for both email and password.");
    } else {
        window.location.href = "./login2.html";
    }
});

var gender = document.querySelector("#gender");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var mobileNum = document.querySelector("#mobile-no");
var country = document.querySelector("#country");

document.querySelector(".submit-btn").addEventListener("click", function() {
    if (gender.value === "" || firstName.value === "" || lastName.value === "" || country.value === "") {
        alert("Please fill in all the information.");
    } else {
        window.location.href = "./login3.html";
    }
});
