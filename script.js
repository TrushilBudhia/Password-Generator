// Assignment Code
// Declaring variables 
var lowercaseChar;
var uppercaseChar;
var numberChar;
var specialChar;

// Assigning a value to generateBtn - selecting the #generate id
var generateBtn = document.querySelector("#generate");

// Write the generated password to the #password id
// With the returned passwordValue value, it assigns it to the variable password. The value of password is then assigned to passwordText which is selecting the #password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Creating a function object to generate the randomized password with the specified criteria from the user
var generatePassword = function() {
  // Prompting the user to enter the password length
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8-128 characters):"));

  // Declaring the variable and setting the values to blank
  var lowercaseValue = "";
  var uppercaseValue = "";
  var numberValue = "";
  var specialValue = "";
  var passwordValue = "";

  // Using an if statement to analyse the users length input
  // Whether the user selects cancel, inputs the correct length value or does not input a valid value, a different result will return
  if (!passwordLength) {
    return;
  } else if (passwordLength >= 8 && passwordLength <= 128 ) {
    // passwordCriteria() function is invoked and the confirm messages are prompted
    passwordCriteria();

    // A message that displays when none of the password character type criteria is selected
    // Invokes the function passwordCriteria() again to reconfirm with the user what character types they wish to select
    while (!lowercaseChar && !uppercaseChar && !numberChar && !specialChar) {
      alert("You must select at least one character type");
      passwordCriteria();
    }

    // Using if statements to check whether the specific character type is selected and changes the value of the relevant variable if they are
    if (lowercaseChar) {
      lowercaseValue = "abcdefghijklmnopqrstuvwxz";
    }
    if (uppercaseChar) {
      uppercaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
    }
    if (numberChar) {
      numberValue = "0123456789";
    }
    if (specialChar) {
      specialValue = " !\"#$%&'().@_*+,-/:;<=>?[\\]^`{|}~";
    }

    // Declaring the characters variable and assigning it a value of the relevant characters used across the different character types chosen by the user
    var characters = lowercaseValue + uppercaseValue + numberValue + specialValue;

    // Using a for loop and Math random code to randomize the password which is then assigned to the passwordValue variable
    for(var i = 0; i < passwordLength; i++) {
      passwordValue += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Returns the passwordValue variable with the updated value
    return passwordValue;
  } else {
    alert("Password length does not meet the criteria (between 8-128 characters). Try again");
    generatePassword();
  }
}

// Creating a function object that prompts confirm messages for the different character types desired for the password
var passwordCriteria = function() {
  lowercaseChar = confirm("Do you want lowercase letters in your password?");
  uppercaseChar = confirm("Do you want uppercase letters in your password?");
  numberChar = confirm("Do you want numbers in your password?");
  specialChar = confirm("Do you want special characters in your password?");

}
// Add event listener to the #generate button id
generateBtn.addEventListener("click", writePassword);


// Declaring variables and assigning values of an element selected to them
var body = document.body;
var wrapperSelect = body.children[0];
var headerSelect = document.querySelector('header');
var mainSelect = document.querySelector('main');

// Creating and appending a FOOTER to the wrapper class in the body section of the document
var footerSection = document.createElement('footer');
footerSection.textContent = "© Created by Trushil";
wrapperSelect.appendChild(footerSection);

// Creating and appending a section with instructions - before the main section
var instructionSection = document.createElement('section');
wrapperSelect.insertBefore(instructionSection, mainSelect);

var instructionHeader = document.createElement('h2');
instructionHeader.textContent = "Password Generator Tool Instructions:";
instructionSection.appendChild(instructionHeader);

var instructionText = document.createElement('p');
instructionText.textContent = "Use our online password generator to create a secure, random password. Select the length and character types you wish to use for the password.";
instructionSection.appendChild(instructionText);

// Creating and appending a section with information on passwords - before the footer section
var informationSection = document.createElement('section');
wrapperSelect.insertBefore(informationSection, footerSection);

var infoHeader = document.createElement('h2');
infoHeader.textContent = "Generate strong, random passwords:";
informationSection.appendChild(infoHeader);

var informationText = document.createElement('p');
informationText.textContent = "Having a weak password can lead to it being hacked more easily. Passwords are a real security threat. If you wish to protect your personal information, creating strong and secure passwords are paramount. This is where the Password Generator can help. Passwords that are hard to crack contain multiple types of characters (lower and uppercase letters, numbers and special characters). An additional step to defend against hacking is to ensuring you have different passwords for each login.";
informationSection.appendChild(informationText);

// CHANGING THE STYLE PROPERTIES

// Declaring variable and assigning it a value - selects the btn class
// Changes the outline style to none
var buttonStyle = document.getElementsByClassName('btn');
buttonStyle[0].style.outline = "none";

// Removing the padding in the wrapper class
wrapperSelect.setAttribute('style', 'padding: 0px')

// Adding styling to the HEADER element
headerSelect.setAttribute('style', 'background: #fff; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 50%); color: #00688B; font-size: 20px;');

// Adding styling to the instructions section
instructionHeader.setAttribute('style', 'color: #0F2F48; margin: 0 auto; margin-top: 20px; padding: 20px; text-align: center;');
instructionText.setAttribute('style', 'font-size: 18px; line-height: 1.4; margin: 0 auto; padding: 10px; text-align: center; max-width: 800px;');

// Adding styling to the MAIN element
mainSelect.setAttribute('style', 'margin-bottom: 40px; margin-top: 40px;');

// Adding styling to the information section
infoHeader.setAttribute('style', 'color: #0F2F48; margin: 0 auto; margin-top: 20px; padding: 20px; text-align: center;');
informationText.setAttribute('style', 'font-size: 18px; line-height: 1.4; margin: 0 auto; margin-bottom: 40px; padding: 10px; text-align: justify; max-width: 800px;');

// Adding the styling to the FOOTER element
footerSection.setAttribute('style', 'background: #313131; color: #fff; margin: 0 auto; padding: 20px; text-align: center; width: 100%;');

// TODO
// Rewrite the function to allow the generate password function to work when the length prompt is initially cancelled.
// Move the latter parts of the code that deal with adding HTML and changing CSS to a new js file