const form = document.querySelector('form');

const userNames = form.elements.name;
const userEmails = form.elements.email;
const userMessages = form.elements.message;
function populateLocalStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setFormData() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;
  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}

if (!localStorage.getItem('userInput')) {
  populateLocalStorage();
} else {
  setFormData();
}
userNames.onchange = populateLocalStorage;
userEmails.onchange = populateLocalStorage;
userMessages.onchange = populateLocalStorage;
