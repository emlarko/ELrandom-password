// Assignment Code
var generateBtn = document.querySelector("#generate");

const char = {
  alpha: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!#$%&'()*+,-./:;<=>?@^_`{|}~",
};


function generatePassword() {
  var passwordChar = char.alpha += "";
  
  var length = window.prompt("How many characters?");
  
  var numbers = window.confirm("Numbers?");
    if (numbers) {
      passwordChar += char.number;
    }
  var special = window.confirm("Special characters?");
    if (special) {
      passwordChar += char.symbol;
    }
    var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  return password;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

