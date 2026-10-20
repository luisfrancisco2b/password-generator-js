// Elements Selection
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const generatedPasswordElementText = document.querySelector("#generated-password h4");

// New Functionalities
const openCloseGeneratorButton = document.querySelector("#open-generate-options")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")

// Funtions

// Function to get a lowercase letter
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Function to get an uppercase letter
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Function to get a number
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

// Function to get a symbols
const getSymbols = () => {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Function to generate a password using the selected character types
const generatePassword = () => {

  let password = "";

  const passwordLength = +lengthInput.value;

  const generators = []

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase)
  }

  if (numbersInput.checked) {
    generators.push(getNumber)
  }

  if (symbolsInput.checked) {
    generators.push(getSymbols)
  }

  if (generators.length === 0) {
    return;
  }

  // Each lop add one characters of each selected type,    so we may generate more than passwordLength
  for (let i = 0; i < passwordLength; i += generators.length) {

    generators.forEach(() => {

      // Pick a random generator and call it to get one character
      const randomValue = generators[Math.floor(Math.random() * generators.length)]()

      password += randomValue
    })

  }

  // Cut the extra characters so the password has the exactly passwordLength characters
  password = password.slice(0, passwordLength)

  generatedPasswordElementText.textContent = password

  generatedPasswordElement.style.display = "block"

};

// Events

// Generate a new password when the generate button is clicked 
generatePasswordButton.addEventListener("click", () => {

  generatePassword()

});

// Show or hide the options painel
openCloseGeneratorButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide")
})

// Copy the generated password and show a feedback on the button for 2 seconds
copyPasswordButton.addEventListener("click", () => {

  const password = generatedPasswordElementText.innerText

  navigator.clipboard.writeText(password).then(() => {

    copyPasswordButton.innerText = "Senha Copiada com Sucesso!"

    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar"
    }, 2000)

  })

})