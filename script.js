// Assignment code here
var generateBtn = document.getElementById("generate");
var uppercaseCharCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseCharCode = 'abcdefghijklmnopqrstuvwxyz';
var numberCharCode = '1234567890';
var symbolCharCode = '@,.+-=/*()';








//write code to generate the password
function generatePassword() {

  function getCharacterAmount() {
    let charactersAmount = prompt("how many character would you like in you password?(Input 8-128)");
    if (!(charactersAmount >= 8 && charactersAmount <= 128)) {
      alert("The number you input has to be between 8 and 128")
     getCharacterAmount()
    }
  
    if (isNaN(charactersAmount)){
      getCharacterAmount();
     
    }
   return charactersAmount;
   
  }

  let charactersAmount = getCharacterAmount();


  // lowercaseCharCode = prompt("do you want lowercase letters in your password?")

  let includeNumbers = confirm("Do Yyou want to include number?")

  let includeUppercase = confirm("Do you want uppercase letters in your password?")

  let includeSymbols = confirm("Do you want symbols in your password?")


  console.log(numberCharCode)
  var charcodes = lowercaseCharCode
  if (includeNumbers) charcodes = charcodes.concat(numberCharCode)
  if (includeSymbols) charcodes = charcodes.concat(symbolCharCode)
  if (includeUppercase) charcodes = charcodes.concat(uppercaseCharCode)
  var passwordCharacter = []
  for (let i = 0; i < charactersAmount; i++) {
    var randomIndex = Math.floor(Math.random() * charcodes.length)
    var randomCharacter = charcodes.charAt(randomIndex);
    passwordCharacter.push(randomCharacter)

  }
  console.log(passwordCharacter)
  return passwordCharacter.join('')

}







//Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.getElementById("password")
  passwordText.value = password;
}



//add event listener to generate button
generateBtn.addEventListener("click", writePassword) 










