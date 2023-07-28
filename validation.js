const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const errorForm = document.querySelector('.error');
  const checkEmail = (str) => str.trim() === str.trim().toLowerCase();

  if (!checkEmail(email)) {
    event.preventDefault();
    errorForm.textContent = 'Please check if your email is in lowercase!';
  }
});
