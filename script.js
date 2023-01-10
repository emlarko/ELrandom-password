// Assignment Code
var generateBtn = document.querySelector("#generate");

const char = {
  alpha: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: "!#$%&'()*+,-./:;<=>?@^_`{|}~",
};

function generatePassword() {
  var passwordChar = "";
  
  var length = window.prompt("How many characters between 8 - 128?");

  if (length >= 8 && length <= 128) {

    var lowercase = window.confirm("Do you want lowercase letters?");
      if (lowercase) {
      passwordChar += char.alpha;
      }
    
    var uppercase = window.confirm("Do you want uppercase letters?");
      if (uppercase) {
      passwordChar += char.alpha.toUpperCase();
      }

    var numbers = window.confirm("Do you want numbers?");
      if (numbers) {
      passwordChar += char.number;
      }
      
    var special = window.confirm("Do you want special characters?");
      if (special) {
      passwordChar += char.symbol;
    }
    // Sends an error message if there are criteria selected.
    if (passwordChar == "") {
      window.alert("Please choose at least one criteria.");
      return "Try again!";
     }

    var password = "";

    for (let i = 0; i < length; i++) {
      password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
    } 

  return password;

  }
  // Sends an error message if the password is too short or too long.
  else {
    window.alert("Incorrect password length, please try again!");
    return "Try again!";
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
