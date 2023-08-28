// Step1

const containerDiv = document.createElement('div');
containerDiv.className = 'container';
const loginContainerDiv = document.createElement('div');
loginContainerDiv.className = 'login__container';
const loginSigninDiv = document.createElement('div');
loginSigninDiv.className = 'login__signin';
const loginSigninNowDiv = document.createElement('div');
loginSigninNowDiv.className = 'login__signin-now';
const h1Element = document.createElement('h1');
h1Element.textContent = 'Sign up NOW!';
const h3Element = document.createElement('h3');
h3Element.textContent = 'Enter your details';
const formElement = document.createElement('form');
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.className = 'input-field';
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;


const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
emailInput.addEventListener('input', function () {
  if (emailPattern.test(emailInput.value)) {
    emailInput.setCustomValidity('');
    emailErrorMessage.textContent = '';
  } else {
    emailInput.setCustomValidity('Please enter a valid email address');
    emailErrorMessage.textContent = 'Please enter a valid email address'; 
  }
});

emailLabel.appendChild(emailInput);


const emailErrorMessage = document.createElement('p');
emailErrorMessage.textContent = '';
emailErrorMessage.style.color = 'red';
formElement.appendChild(emailErrorMessage);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.className = 'input-field';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);

const cPasswordLabel = document.createElement('label');
cPasswordLabel.textContent = 'Confirm Password';
const cPasswordInput = document.createElement('input');
cPasswordInput.className = 'input-field';
cPasswordInput.type = 'password';
cPasswordInput.placeholder = 'Confirm Password';
cPasswordInput.required = true;
cPasswordLabel.appendChild(cPasswordInput);


const cPasswordErrorMessage = document.createElement('p');
cPasswordErrorMessage.textContent = 'Passwords do not match';
cPasswordErrorMessage.style.color = 'red';
cPasswordErrorMessage.style.display = 'none';
formElement.appendChild(cPasswordErrorMessage);


cPasswordInput.addEventListener('input', function () {
  if (cPasswordInput.value === passwordInput.value) {
    cPasswordErrorMessage.style.display = 'none';
  } else {
    cPasswordErrorMessage.style.display = 'block'; 
  }
});

formElement.appendChild(emailLabel);
formElement.appendChild(passwordLabel);
formElement.appendChild(cPasswordLabel);

const submitButton = document.createElement('button');
submitButton.className = 'filled-btn';
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';
formElement.appendChild(submitButton);

loginSigninNowDiv.appendChild(h1Element);
loginSigninNowDiv.appendChild(h3Element);
loginSigninNowDiv.appendChild(formElement);

loginSigninDiv.appendChild(loginSigninNowDiv);
loginContainerDiv.appendChild(loginSigninDiv);
containerDiv.appendChild(loginContainerDiv);
document.body.appendChild(containerDiv);
// Step 1.1
function handleSubmit(event) {
    event.preventDefault(); 
    
    const passwordInput = document.querySelector('input[type="password"]');
    const cPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');
    const errorParagraph = document.querySelector('p');
  
    if (passwordInput.value !== cPasswordInput.value) {
      errorParagraph.style.display = 'block';
    } else {
      window.location.href = 'quotes.html';
    }
  }
  
  submitButton.addEventListener('click', handleSubmit);