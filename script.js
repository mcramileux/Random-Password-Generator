// Assignment Code
// Assign the generate button element to the generateBtn variable
var generateBtn = document.querySelector("#generate");

//Set a password length and complexity
var lengthElement = document.querySelector ("#length");
var lowerCaseCharacters = document.querySelector ("#lowercase");
var upperCaseCharacters = document.querySelector ("#uppercase");
var numberCharacters = document.querySelector ("#numbercase");
var specialCharacters = document.querySelector ("#special");

// The password characters values
// Set the variables to hold the values of the password characters
var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberCharacters = '0123456789';
var specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// Function to generate a random passowrd based on the user input
// Generate random password from 8 to 128 characters
function generatePassword() {
    passwordLength = prompt ("Please enter you password length between 8 to 128 characters.");
    includeLowerCaseCharacters = confirm("Would you like to include lowercase characters?");
    includeUpperCaseCharacters = confirm ("Would you like to include uppercase characters?");
    includeNumberCharacters = confirm ("Would you like to include number characters?");
    includeSpecialCharacters = confirm ("Would you like to include special characters?");
    console.log(passwordLength);
  
// Validate the password length input
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
      confirm ("Please try again. The password must have at least 8 characters and not more than 128 characters");
    }
  
  // let length = lengthElement.value;
  let charSet = "";

  // Build the character set from the selected options
  if (includeLowerCaseCharacters) charSet += lowerCaseCharacters;
  if (includeUpperCaseCharacters) charSet += upperCaseCharacters;
  if (includeNumberCharacters) charSet += numberCharacters;
  if (includeSpecialCharacters) charSet += specialCharacters;
    
  let password = "";
  // Create for loop to choose password characters
  for (let i = 0; i < passwordLength ; i ++){
  password += charSet.charAt(Math.floor(Math.random()* charSet.length))
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





