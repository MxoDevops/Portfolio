const formInput = document.getElementById('footer-form');
const email = document.querySelector('#email');
const errorElement = document.getElementById('error');
errorElement.style.color = 'red';

formInput.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    formInput.submit();
  } else {
    errorElement.innerText = 'Enter e-mail in lowercase!';
  }
});
