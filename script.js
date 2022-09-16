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
  let password = "";

  // length question that stores the user's desired length"
  const passLength = prompt("Enter your desired Password length");
  console.log(passLength); // Users entry

  // confirms whether or not the password contains Capital letters
  const capsQuestion = confirm(
    "Do you want to have Capital letters in your password?"
  ); // console.log(capsQuestion); // Boolean

  // confirms whether or not the password contains Capital letters
  const lowQuestion = confirm(
    "Do you want to have Lowercase letters in your password?"
  ); // console.log(capsQuestion); // Boolean

  // confirms whether or not the password contains Capital letters
  const specQuestion = confirm(
    "Do you want to have Special Characters in your password?"
  ); // console.log(specQuestion); // Boolean

  // confirms whether or not the password contains Capital letters
  const numQuestion = confirm("Do you want to have Numbers in your password?");
  // console.log(numQuestion);// Boolean

  for (let i = 0; i < parseInt(passLength); i++) {
    if (capsQuestion) {
      password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      console.log(password);
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
