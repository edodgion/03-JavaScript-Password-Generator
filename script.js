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
var generateBtn = document.querySelector("#generate");

var uppercase_characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowercase_characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var number_characters  = ["0","1","2","3","4","5","6","7","8","9"];
var special_characters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var password = "";
var options = []
var garenteedOptions = []
var endPassword = []

//start the generating password
function generatePassword() {
   //promt for password length
var passwordLength = parseInt(prompt("Enter a number between 8 and 128"));
   if (isNaN(passwordLength) || passwardLength < 8 || passwordLength >128){
      window.alert("Invalid Entry")
   }
   //confirm for lowercase
   var lowercase = confirm("Click 'OK' if you would you like lowercase characters?");
   
   //confirm for uppercase
   var uppercase = confirm("Click 'OK' if you would you like UPPERCASE characters?");
   //confirm for numeric
   var numeric = confirm ("Click 'OK' if you would you like numeric characters?");
}

 
 
 
 
 


//var password = "";
//var passwordLength = 0;
//var index = Math.floor(Math.random)
//var compChoice = uppercase_characters[index];
//var lowercase = confirm("Click 'OK' if you would you like lowercase characters?");
//console.log(lowercase)
//var uppercase = confirm("Click 'OK' if you would you like UPPERCASE characters?");
//console.log(uppercase)
//var numeric = confirm ("Click 'OK' if you would you like numeric characters?");
//console.log(numeric)
//var specChar = confirm ("Click 'OK' if you would you like special characters?");
//console.log(specChar)
//while (passwordLength < 10 || passwordLength > 20 || isNaN(passwordLength)) {
// passwordLength = prompt("Enter a number between 10 and 20");
//} while (lowercase_characters |lowercase_characters|lowercase_characters|lowercase_characters){}
///function makePassword() {}
// let complexity = documnet.getElementById ("card-body")
// for (var i=9; i<passwordLength; i++) {
// var index = Math.floor(Math.random);(Math.random() *2)
//document.getElementById("password")
//Write password to the #password input
//function writePassword() {
//var password = generatePassword();  
//var passwordText = document.querySelector("#password");
//passwordText.value = password;
//Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);