const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#$%!()*+-./:;<>";

const allChars = upperCase + lowerCase + symbol + number;


function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy"); 
}

// Add event listeners for button and image clicks
const generateButton = document.querySelector("#overview button");
generateButton.addEventListener("click", createPassword);

const copyImage = document.querySelector("#overview .display img");
copyImage.addEventListener("click", copyPassword);
