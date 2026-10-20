# 🔐 Password Generator (Vanilla JavaScript)

A password generator built from scratch with **HTML5**, **CSS3**, and **Vanilla JavaScript**. It is part of an account sign-up form and lets users choose the password length and character types, generate a password, and copy it to the clipboard.

## 🖼️ Preview

![Password generator preview](img/desktop-preview.png)

## ✨ Features

- ✅ Choose the password length
- ✅ Pick the character types: lowercase and uppercase letters, numbers and symbols
- ✅ Generate a new password with the selected options
- ✅ Copy the generated password to the clipboard with one click
- ✅ Warning message when no character type is selected
- ✅ Options reset when the panel is closed

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🚀 How to Run the Project Locally

1. Clone the repository

```bash
   git clone https://github.com/luisfrancisco2b/password-generator-js
```

2. Navigate to the project folder

```bash
   cd password-generator-js
```

3. Open `index.html` in your browser, or run it with Live Server

## ⚠️ Notes

- The sign-up form is visual only. It does not send data or authenticate users.
- Passwords are generated with `Math.random()`, which is not cryptographically secure. This project is for study purposes. For real applications, use `crypto.getRandomValues()`.

## 🔮 Possible Improvements

- [ ] Replace `Math.random()` with `crypto.getRandomValues()`
- [ ] Guarantee at least one character of each selected type
- [ ] Show a visual message instead of the browser alert

---

## 👨‍💻 Author

Luis Francisco
