// Declaring variables and assigning specific values to them
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passwordLengthStart = 8;

// Creating a randomFunc object that contains the values for lower, upper, number and symbol
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// Creating a function that prompts the user for their password criteria and writes the password that is generated to the #password element
function writePassword() {
  // Using a do while statement to prompt the user to enter the password length and to analyse the users length input. Only proceed if not invalid output. 
  do {
      var passwordLength = parseInt(prompt("Enter the length of the password (between 8-128 characters):", passwordLengthStart));
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(Number(passwordLength)) || passwordLength === null || typeof(passwordLength) != "number" );
   
  // Using an if statement to check if passwordLength matches the criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
  // Prompts confirm messages for the different character types desired for the password
    var lowercaseUse = confirm("Do you want lowercase letters in your password?");
    var uppercaseUse = confirm("Do you want uppercase letters in your password?");
    var numberUse = confirm("Do you want numbers in your password?");
    var specialUse = confirm("Do you want special characters in your password?");     

    // A message that displays while none of the password character type criteria is selected. Confirm messages are prompted again if no criteria is selected
    while (!lowercaseUse && !uppercaseUse && !numberUse && !specialUse) {
      alert("You must select at least one character type");
      var lowercaseUse = confirm("Do you want lowercase letters in your password?");
      var uppercaseUse = confirm("Do you want uppercase letters in your password?");
      var numberUse = confirm("Do you want numbers in your password?");
      var specialUse = confirm("Do you want special characters in your password?");   
    }
  }
  // Write the generated password to the #password id
  // With the returned passwordValue value, it assigns it to the variable password. The value of password is then assigned to passwordText which is selecting the #password id
  var password = generatePassword(lowercaseUse, uppercaseUse, numberUse, specialUse, passwordLength);
  passwordText.innerText = password;
};

// The function generates a randomised password and returns the passwordValue value
function generatePassword(lower, upper, number, symbol, passwordLength) {
	var generatedPassword = '';
	var charTypesCount = lower + upper + number + symbol;
	var chosenCharTypesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Using a for loop to return randomised values of the character types to the genratedPassword variable
  // The forEach method ensures the selected character type(s) chosen by the user is used in the password
	for(let i=0; i<passwordLength; i+=charTypesCount) {
		chosenCharTypesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();			
		});
	}
  // Shuffling the generatedPassword using the sort method and assigning the value to the shuffledPassword variable
  var shuffledPassword = generatedPassword.split('').sort(() => Math.floor(Math.random() * Math.floor(3)) - 1).join('');
	
  // Assigns the shuffledPassword value after slicing to passwordLength to the passwordValue variable. Returns the passwordValue
	var passwordValue = shuffledPassword.slice(0, passwordLength);
	return passwordValue;
}

// Creating functions to get random values for the different character types when used in the password
function getRandomLower() {
	var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	return lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
}
function getRandomUpper() {
	var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	return uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
}
function getRandomNumber() {
	var numberChar = ["0", "1","2","3","4","5","6","7","8","9"];
	return numberChar[Math.floor(Math.random() * numberChar.length)];
}
function getRandomSymbol() {
	var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", ".", "@", "_", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
	return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Add event listener to the #generate button id - when the mouse is clicked on the button, the writePassword() function runs
generateBtn.addEventListener('click', writePassword);
