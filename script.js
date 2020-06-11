// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var numOfChar = prompt("How many characters do you want?");
  var confirmUpper = confirm("Do you want uppercase letters?");
  var confirmLower = confirm("Do you want lowercase letters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSpecial = confirm("Do you want special characters?");
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*=-_"
  var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var arraySymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"]




  return "randomPassword"
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