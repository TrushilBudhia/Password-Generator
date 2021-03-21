// Declaring variables and assigning specific values to most of them
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChar = ["0", "1","2","3","4","5","6","7","8","9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", ".", "@", "_", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
var passwordLengthStart = 8;
var lowercaseUse;
var uppercaseUse;
var numberUse;
var specialUse;

// Assigning a value to generateBtn - selecting the #generate id
var generateBtn = document.querySelector("#generate");

// Write the generated password to the #password id
// With the returned passwordValue value, it assigns it to the variable password. The value of password is then assigned to passwordText which is selecting the #password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Creating a function object to generate the randomized password with the specified criteria from the user
var generatePassword = function() {
  var characterArray = [];
  var passwordValue = "";

  // Using a do while statement to prompt the user to enter the password length and to analyse the users length input. Only proceed if not invalid output. 
  do {
    var passwordLength = parseInt(prompt("Enter the length of the password (between 8-128 characters):", passwordLengthStart));
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(Number(passwordLength)) || passwordLength === null || typeof(passwordLength) != "number" );

  // Using an if statement to check if passwordLength matches the criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
    // passwordCriteria() function is invoked and the confirm messages are prompted
    passwordCriteria();

    // A message that displays while none of the password character type criteria is selected
    // Invokes the function passwordCriteria() again to reconfirm with the user what character types they wish to select
    while (!lowercaseUse && !uppercaseUse && !numberUse && !specialUse) {
      alert("You must select at least one character type");
      passwordCriteria();
    }

    // Using if statements to check whether the specific character type is selected and changes the value of the relevant variable if they are
    if (lowercaseUse) {
      characterArray.push(lowercaseChar);
    }
    if (uppercaseUse) {
      characterArray.push(uppercaseChar);
    }
    if (numberUse) {
      characterArray.push(numberChar);
    }
    if (specialUse) {
      characterArray.push(specialChar);
    }

    // Using a for loop and Math random code to randomize the password which is then assigned to the passwordValue variable
    for(var i = 0; i < passwordLength; i++) {
      // Generates a random number based on the characterArray length - between 0-3 in this case. 
      var charArrayNumber = parseInt(Math.floor(Math.random()*characterArray.length)); 
      // Uses the number arrived at in charArrayNumber to index the character type stored in the characterArray - either lowercase(0), uppercase(1), numbers(2) or special characters(3).  
      var selectedCharArray = characterArray[charArrayNumber];
      // Generates a random number based on the selected character type array length - either 0-25 (for lowercase or uppercase), 0-9 (for numbers) or 0-32 (for special characters)
      var randomCharNumber = Math.floor(Math.random()*selectedCharArray.length);
      // Uses the number arrived at in randomCharNumber to index the value stored in the selectedCharArray
      var randomChar = selectedCharArray[randomCharNumber];

      // Each time the loop runs, the random character is added to the passwordValue until the passwordLength specified by the user is reached
      passwordValue += randomChar;
    }
    // Returns the passwordValue variable with the updated value
    return passwordValue;
  } 
}

// Creating a function object that prompts confirm messages for the different character types desired for the password
var passwordCriteria = function() {
  lowercaseUse = confirm("Do you want lowercase letters in your password?");
  uppercaseUse = confirm("Do you want uppercase letters in your password?");
  numberUse = confirm("Do you want numbers in your password?");
  specialUse = confirm("Do you want special characters in your password?");
}

// Add event listener to the #generate button id - when the mouse is clicked on the button, the writePassword() function runs
generateBtn.addEventListener("click", writePassword);