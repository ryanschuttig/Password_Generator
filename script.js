// Hooks to Button
var generateBtn = document.querySelector("#generate");
// GLOBALS
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*=-_";
var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
var passCriteria = [];
var password = "";
var finalPassword = "";

// Builds Password
function generatePassword() {

  // Asks user how many characters in password
  var numOfChar = prompt("How many characters do you want?");
  // If character input less than 8 or more than 128, ask again
  if (numOfChar > 7 && numOfChar < 127) {
    // Asks user for each type of character they want
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");

    // Includes everything asked for in password
    if (confirmUpper) {
      password += passCriteria.concat(arrayUpperChar);
      console.log(password)
    }

    if (confirmLower) {
      password += passCriteria.concat(arrayLowerChar);
      console.log(password)
    }

    if (confirmNumbers) {
      password += passCriteria.concat(arrayNumbers);
      console.log(password)
    }

    if (confirmSpecial) {
      password += passCriteria.concat(arraySpecial);
      console.log(password)
    }
    // Replaces all array commas
    password = password.replace(/,/g, "")
    console.log("stripped password", password)
    // Loops random generated password between input choices
    for (let index = 0; index < numOfChar; index++) {
      finalPassword += password.charAt(Math.floor(Math.random() * password.length));
    }
    // Returns final randomized password
    console.log(password)
    return finalPassword

  } else
    alert("Must be between 8 and 128 characters")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button - fires function writePassword
generateBtn.addEventListener("click", writePassword);