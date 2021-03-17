// Assignment Code
// Declaring variables
var lowercaseChar;
var uppercaseChar;
var numberChar;
var specialChar;

// Assigning a value to generateBtn - selecting the #generate id
var generateBtn = document.querySelector("#generate");

// Write the generated password to the #password id
// With the returned passwordSet value, it assigns it to the variable password
// The value of password is then assigned to passwordText which is selecting the #password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Creating a function object to generate the randomized password with the specified criteria from the user
var generatePassword = function() {
  // Prompting the user to enter the password length
  var passwordLength = prompt("Enter the length of the password (between 8-128 characters):");

  // Declaring the variable and setting the values to blank
  var lowercaseValue = "";
  var uppercaseValue = "";
  var numberValue = "";
  var specialValue = "";
  var passwordSet = "";

  // Using an if statement to analyse the users length input
  // Whether the user selects cancel, inputs the correct length value or does not input a valid value, a different result will return
  if(!passwordLength) {
    return;
  } else if(passwordLength >= 8 && passwordLength <= 128 ) {
    // passwordCriteria() function is invoked and the confirm messages are prompted
    passwordCriteria();

    // A message that displays when none of the password character type criteria is selected
    // Invokes the function passwordCriteria() again to reconfirm with the user what character types they wish to select
    while(!lowercaseChar && !uppercaseChar && !numberChar && !specialChar) {
      alert("You must select at least one character type");
      passwordCriteria();
    }

    // Using if statements to check whether the specific character type is selected and changes the value of the relevant variable if they are
    if(lowercaseChar) {
      lowercaseValue = "abcdefghijklmnopqrstuvwxz";
      console.log(lowercaseValue);
    }
  
    if(uppercaseChar) {
      uppercaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
      console.log(uppercaseValue);
    }
  
    if(numberChar) {
      numberValue = "0123456789";
      console.log(numberValue);
    }
  
    if(specialChar) {
      specialValue = " !\"#$%&'().@_*+,-/:;<=>?[\\]^`{|}~";
      console.log(specialValue);
    }

    // Declaring the characters variable and assigning it a value of the relevant characters used across the different character types chosen by the user
    var characters = lowercaseValue + uppercaseValue + numberValue + specialValue;
    console.log(characters);

    // Using a for loop and Math random code to randomize the password which is assigned to the passwordSet variable
    for(var i = 0; i < passwordLength; i++) {
      passwordSet += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Returns the passwordSet variable with the updated value
    return passwordSet;
  } else {
    alert("Password length does not meet the criteria (between 8-128 characters). Try again");
    generatePassword();
  }
}

// Creating a function object that prompts confirm messages for the different character types desires for the password
var passwordCriteria = function() {
  lowercaseChar = confirm("Do you want lowercase letters in your password?");
  uppercaseChar = confirm("Do you want uppercase letters in your password?");
  numberChar = confirm("Do you want numbers in your password?");
  specialChar = confirm("Do you want special characters in your password?");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// CHANGING THE STYLE PROPERTIES
// Declaring variable and assigning it a value - selects the btn class
// Changes the outline style to none
var buttonStyle = document.getElementsByClassName('btn');
buttonStyle[0].style.outline = "none";

var footerStyle = document.querySelector('footer');
footerStyle.setAttribute('style', 'background: #313131; color: #fff; margin: 0 auto; margin-top: 100px; padding: 20px; text-align: center; width: 100%;');

// Removing the padding in the wrapper class
var wrapperStyle = document.getElementsByClassName('wrapper');
wrapperStyle[0].setAttribute('style', 'padding: 0px')
