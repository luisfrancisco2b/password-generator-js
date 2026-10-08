// Elements Selection
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funtions

// Get User's name and email function
const getNameEmailUser = () => {
  let nameUser = nameInput.value.trim();
  let emailUser = emailInput.value.trim();

  console.log(nameUser, emailUser);
};

// Function to get letter lower case
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Function to get letter upper case
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Function to get number
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

// Function to get symbols
const getSymbols = () => {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Function to generate password
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbols,
) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols,
  ]

  for (let i = 0; i < passwordLength; i += 4) {

    generators.forEach(() => {

      const randomValue = generators[Math.floor(Math.random() * generators.length)]()

      console.log(randomValue)
    })

  }
};

console.log(
  getLetterLowerCase(),
  getLetterUpperCase(),
  getNumber(),
  getSymbols(),
);

// Events
btnSubmit.addEventListener("click", () => {
  getNameEmailUser();
});

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols,
  )
});
