// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numberArray  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];


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
   if (userLowerCase == true) {
     options = options.concat(lowercaseArray)
   }
    //confirm for UPPERCASE
     var userUpperCase = window.confirm("Click 'OK' if you would you like UPPERCASE characters?");
   if (userUpperCase == true) {
     options = options.concat(uppercaseArray)
    
   }
   
   //confirm for Numeric
   var userNumericCharacter = window.confirm("Click 'OK' if you would you like Numeric characters?");
   if (userNumericCharacter == true) {
     options = options.concat(numberArray)
   }

    //confirm for Special Charaters
     var userSpecialCharacter = window.confirm("Click 'OK' if you would you like Special Characters characters?");
   if (userSpecialCharacter == true) {
    options = options.concat(specialArray)
   }
//Shouts out a "Try Again" window if user 'clicks' cancel for each character option
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
