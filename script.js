// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // characteristcs
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const special = "!@#$&*-";

  // length question that stores the user's desired length"
  const passLength = prompt("Enter your desired Password length");
  console.log(passLength);

  // confirms whether or not the password contains Capital letters
  const capsQuestion = confirm(
    "Do you want to have Capital letters in your password?"
  );
  console.log(capsQuestion);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
