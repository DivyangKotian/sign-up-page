const passwordInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capitalLetter = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const message = document.getElementById("message");
const confirmPassword = document.getElementById("confirm-password");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const submitButton = document.getElementById("submitBtn");
const errorMessage = document.getElementById("password-error");
const email = document.getElementById("email");
const phoneNumner = document.getElementById("phone-number");

passwordInput.onfocus = function() {
  message.style.display = "block";
};

passwordInput.onblur = function() {
  message.style.display = "none";
};

passwordInput.addEventListener("keyup", myFunction);

function myFunction() {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numberList = /[0-9]/g;

  if (passwordInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  if (passwordInput.value.match(upperCaseLetters)) {
    capitalLetter.classList.remove("invalid");
    capitalLetter.classList.add("valid");
  } else {
    capitalLetter.classList.remove("valid");
    capitalLetter.classList.add("invalid");
  }

  if (passwordInput.value.match(numberList)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (passwordInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

document.getElementById('registrationForm').addEventListener('keyup', validateForm);

function validateForm() {
  let isValid = true;

  if (!firstName.value || !lastName.value || !email.value || !phoneNumner.value || !passwordInput.value || !confirmPassword.value ) {
    isValid = false;
  }

  if (passwordInput.value !== confirmPassword.value) {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.classList.remove("success");
    errorMessage.classList.add("error");
    isValid = false;
  } else {
    errorMessage.textContent = "Passwords match!";
    errorMessage.classList.remove("error");
    errorMessage.classList.add("success");
  }

  if (isValid===true) {
    submitButton.classList.add("enabled");
  } else {
    submitButton.classList.remove("enabled");
  }
}

//https://www.pexels.com/photo/closeup-photo-of-brown-and-black-dog-face-406014/ for copyright//