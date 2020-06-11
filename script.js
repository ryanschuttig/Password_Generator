// Assignment Code
// Hooks into button
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

// Build Password
function generatePassword() {

  // Ask user how many characters
  var numOfChar = prompt("How many characters do you want?");
  // Checking if number of characters in range
  if (numOfChar > 7 && numOfChar < 27) {
    // Ask for everything they want
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");

    // Include everything asked for
    if (confirmUpper) {
      password += passCriteria.concat(arrayUpperChar);
      console.log(password)
    }
    else {
      return false
    }

    if (confirmLower) {
      password += passCriteria.concat(arrayLowerChar);
      console.log(password)
    }
    else {
      return false
    }

    if (confirmNumbers) {
      password += passCriteria.concat(arrayNumbers);
      console.log(password)
    }
    else {
      return false
    }

    if (confirmSpecial) {
      password += passCriteria.concat(arraySpecial);
      console.log(password)
    }
    else {
      return false
    }

    password = password.replace(/,/g , "")
    console.log("stripped password" , password)
    for (let index = 0; index < numOfChar; index++) {
      finalPassword += password.charAt(Math.floor(Math.random() * password.length));
      
    }
    console.log(password)
    return finalPassword
    // [Math.floor(Math.random * numOfChar)])

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


//Research concatenate method
//Array of upper or lower case letters
//Containers of everything -> send content into 1 big container to build password