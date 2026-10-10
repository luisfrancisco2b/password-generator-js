// Elements Selection
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const generatedPasswordElementText = document.querySelector("#generated-password h4");

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

// Function to generate a password with at least one character of each type 
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

  // Each for adds 4 characters, so we may generate more than passwordLength
  for (let i = 0; i < passwordLength; i += 4) {

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
