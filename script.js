
/**
 Acceptance Criteria
 GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
 **/
/**
 PSUEDOCODE

 -present user with a series of (yes/no) prompts
 -prompt user to select the password length between 8 and 128 characters
 -- input should be a number
 -- store response in variable
 - prompt user if they want to include lowercase
 -- input should be yes/no
 ---store response in variable
 - prompt user if they want to include uppercase
  --input should be yes/no
  -- store respnse in variable
 - prompt user if they want to include numeric
  -- input should be yes/no
  ---store respone in variable
 - prompt user if they want to include special characters
  -- input should be yes/no
  -- store response in variable
  - NOTE: At least one of 4 above answers should be yes
  -- esle, display an alert
  -

  Initialize password string as an empty string
  Iterate over the chosen password length
  Select one character each from the allowed character sets
  - allowed character sets can be one or all four of them
  Each iteration, add  the selected random character to the password string

  Issues: How do we ensure that when we're done with iteration 
  that we have all of the characters that we want? 

  example

  let allowedUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

  allowedUpperCase

  let allowedDigits = "0987654321"

  allowedDigits = "0987654321".split('')


  
*/




// Assignment Code
var generateBtn = document.querySelector("#generate");

const allowedDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; 
const allowedUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const allowedLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const allowedSpecial = ['!', '@' , '#', '$', '%', '^', '&', '*', '?'];
const choseNo = [];

function getRandomCharacter(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function generatePassword(length, allowedCharacterSets) {
  var password = "";

  for(let i = 0; i < allowedCharacterSets.length; ++i) {

  }

  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(allowedCharacterSets[i % allowedCharacterSets.length]);
  }
  const UNIVERSAL_CHARACTER_SET = allowedCharacterSets.flat();

  for (let i = password.length;  i < length; ++i) {
    password += getRandomCharacter(UNIVERSAL_CHARACTER_SET);
  }

  return password; 

}


// Write password to the #password input
function writePassword() {

    let isValidLength = false;
    let promptText = "How long would you like your password to be? Please choose between 8 and 128 characters."
    while (!isValidLength){
      var length = window.prompt(promptText);
      if (parseInt(length).toString() !== 'NaN'){
           if (length >= 8 && length <= 128){
             isValidLength = true;
           } else {
               promptText = 'Invalid option. Please enter a number between 8 and 128.';
           }
           
      }
    }

    var userDigits = window.prompt('Would you like to include numbers in your password? Type "Y" for yes or "N" for no');
     if (userDigits === "" || userDigits === null) {
       window.alert('Invalid entry. Type "Y" for yes or "N" for no.');
       return userDigits = window.prompt();
     }

     userDigits = userDigits.toLowerCase();

     if (userDigits === "y") {
       userDigits = allowedDigits;
        return true;
     }
     
   
    var userSpec = window.prompt('Would you like to include special characters in your password? Type "Y" for yes or "N" for no');
    var userLower = window.prompt('Would you like to include lowercase letters in your password? Type "Y" for yes or "N" for no');
    var userUpper = window.prompt('Would you like to include uppercase letters in your password? Type "Y" for yes or "N" for no');
  
  var password = generatePassword(length, [allowedDigits, allowedSpecial, allowedLowerCase, allowedUpperCase]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/**
 *  @return an array of allowed character arrays
 */

 function promptUser() {
  
}





