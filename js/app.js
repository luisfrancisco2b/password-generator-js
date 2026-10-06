// Elements Selection
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funtions
const getNameEmailUser = () => {
  let nameUser = nameInput.value.trim();
  let emailUser = emailInput.value.trim();

  console.log(nameUser, emailUser);
};

const getLetterLowerCase = () => {
  console.log(String.fromCharCode(69));
};

getLetterLowerCase();

// Events
btnSubmit.addEventListener("click", () => {
  getNameEmailUser();
});

generatePasswordButton.addEventListener("click", () => {
  console.log("teste");
});
