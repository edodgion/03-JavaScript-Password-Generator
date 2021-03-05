//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either
// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase_characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowercase_characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var number_characters  = ["0","1","2","3","4","5","6","7","8","9"];
var special_characters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];

//Start generate password
function  generatePassword() {

  var passwordLength = (window.prompt("Enter your desired password length between 8 and 128"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
    //Gives a 'Invalid Entry' alert if cancel was 'clicked' sends a '0' messege in text box
    window.alert('Invalid Entry')
    return passwordLength;
  }
  var options = [];

   //confirm for lowercase
   var userLowerCase = window.confirm("Click 'OK' if you would you like lowercase characters?");
   if (userLowerCase == true || userLowerCase == null) {
     options = options.concat(lowercaseArray)
   }
    //confirm for UPPERCASE
     var userUpperCase = window.confirm("Click 'OK' if you would you like UPPERCASE characters?");
   if (userUpperCase == true || userUpperCase == null) {
     options = options.concat(uppercaseArray)
    
   }
   
   //confirm for Numeric
   var userNumericCharacter = window.confirm("Click 'OK' if you would you like Numeric characters?");
   if (userNumericCharacter == true || userNumericCharacter == null) {
     options = options.concat(numberArray)
   }

    //confirm for Special Charaters
     var userSpecialCharacter = window.confirm("Click 'OK' if you would you like Special Characters characters?");
   if (userSpecialCharacter == true || userSpecialCharacter == null) {
    options = options.concat(specialArray)
   }

   if (options.length === 0) {
    alert("Try Again")
     return options;
   }

  var password = "";

//for statement for random options for password
  for (var i = 0; i < passwordLength; i++){
  var index = Math.floor(Math.random() * options.length)
  var character = options[index];
  password = password.concat(character)
  }

  return password
}

generateBtn.addEventListener('click', writePassword);

 //Display results in textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


 
 
 
 
 


