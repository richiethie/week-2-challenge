// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword () {
  var userInput = prompt("Enter password character length: ")
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    alert("Please enter a number.")
    return
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.")
    return
  }
  var passwordNumbers = confirm("Would you like to include numbers in your password?")
  var passwordSymbols = confirm("Would you like to include symbols in your password?")
  var passwordLowerCase = confirm("Would you like to include lowercase letters in your password?")
  var passwordUpperCase = confirm("Would you like to include uppercase letters in your password?")
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*" ]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var passwordOptions = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if(passwordNumbers) {
    passwordOptions.push(numberList)
  }

  if(passwordSymbols) {
    passwordOptions.push(symbolList)
  }

  if(passwordLowerCase) {
    passwordOptions.push(symbolList)
  }

  if(passwordUpperCase) {
    passwordOptions.push(uppercaseList)
  }

  if (passwordOptions === 0) {
    passwordOptions.push(symbolList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++ ) {
    var randomList = getRandomItem(passwordOptions)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
