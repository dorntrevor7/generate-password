// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // get the return value from the gereatePassword function and set the value to passowrd
  var password = generatePassword();
  // grabs the element with the id of password
  var passwordText = document.querySelector("#password");
  // sets the value to the returned password on the html
  passwordText.value = password;
}

function generatePassword() {
  // characteristcs
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const special = "!@#$&*-";
  let password = "";

  // length question that stores the user's desired length"
  const passLength = prompt(
    "Enter your desired Password length in between 8 and 129 characters"
  );

  if (parseInt(passLength) >= 8 && parseInt(passLength) <= 129) {
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
    const numQuestion = confirm(
      "Do you want to have Numbers in your password?"
    ); // console.log(numQuestion);// Boolean

    // loops over the users amount of times
    for (let i = 0; i < parseInt(passLength); i++) {
      if (capsQuestion) {
        // adds to the passowrd a capital letter
        let capital = alphabet.toUpperCase();
        // console.log(capital);
        password += capital.charAt(Math.floor(Math.random() * alphabet.length));
        // console.log(password); // String
      }
      if (specQuestion) {
        // adds to the passowrd a random special character
        password += special.charAt(Math.floor(Math.random() * special.length));
        console.log(password);
      }
      if (numQuestion) {
        // adds to the passowrd a random number
        password += number.charAt(Math.floor(Math.random() * number.length));
      }
      if (lowQuestion) {
        // adds to the passowrd a lowercase letter
        password += alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
      }
    }

    // returns users specified length by slicing the variable password
    return password.slice(0, passLength);
  } else {
    return (password =
      "Try again, the length does not match the requirements.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
