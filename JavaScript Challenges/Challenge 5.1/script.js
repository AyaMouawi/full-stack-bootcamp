//Step 1 

const button = document.createElement("button");
button.textContent = "Click me";

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

document.body.appendChild(button);

button.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.textContent = "Clicked " + randomNumber + "!";
});


//Step 2 

const h1Element = document.createElement("h1");
h1Element.textContent = "Hello, Event Handling!";
document.body.appendChild(h1Element);

h1Element.style.border = "10px dotted green";

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "a":
      h1Element.style.backgroundColor = "red";
      break;
    case "s":
      h1Element.style.marginLeft = parseInt(getComputedStyle(h1Element).marginLeft) + 10 + "px";
      break;
    case "d":
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "Key D was pressed!";
      document.body.appendChild(newParagraph);
      break;
    case "w":
      h1Element.style.display = h1Element.style.display === "none" ? "block" : "none";
      break;
    case " ":
      const currentFontSize = parseInt(getComputedStyle(h1Element).fontSize);
      h1Element.style.fontSize = (currentFontSize + 2) + "px";
      break;
  }
});


//Step 3 

    const form = document.getElementById("myForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const emailError = document.getElementById("emailError");
    const passwordMatchError = document.getElementById("passwordMatchError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

  
      if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
      } else {
        emailError.textContent = "";
      }


      if (passwordInput.value !== confirmPasswordInput.value) {
        passwordMatchError.textContent = "Passwords do not match.";
        return;
      } else {
        passwordMatchError.textContent = "";
      }

      successMessage.style.display = "block";
    });

    emailInput.addEventListener("focus", function() {
      emailInput.style.backgroundColor = "#e0e0e0";
    });

    emailInput.addEventListener("blur", function() {
      emailInput.style.backgroundColor = "white";
    });

    passwordInput.addEventListener("focus", function() {
      passwordInput.style.backgroundColor = "#e0e0e0";
    });

    passwordInput.addEventListener("blur", function() {
      passwordInput.style.backgroundColor = "white";
    });

    confirmPasswordInput.addEventListener("focus", function() {
      confirmPasswordInput.style.backgroundColor = "#e0e0e0";
    });

    confirmPasswordInput.addEventListener("blur", function() {
      confirmPasswordInput.style.backgroundColor = "white";
    });

    function isValidEmail(email) {   //help chatgpt 
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }