/* ADDING HTML ELEMENTS */

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
instructionText.textContent = "Use our online password generator to create a secure, random password. Select the length (between 8-128 characters) and character types you wish to use for the password.";
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

/* CHANGING THE STYLE PROPERTIES */

// Declaring variable and assigning it a value - selects the btn class
// Changes the outline style to none
var buttonStyle = document.getElementsByClassName('btn');
buttonStyle[0].style.outline = "none";

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