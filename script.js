// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var numOfChar = prompt("How many Characters")




  return "numOfChar"
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