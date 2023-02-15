const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('conf-password');
const validationMessage = document.querySelector('.validation-message');
const submitButton = document.getElementById('submit-button');

confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add('invalid-input');
    validationMessage.style.display = 'block';
  } else {
    confirmPasswordInput.classList.remove('invalid-input');
    validationMessage.style.display = 'none';
  }
});

submitButton.addEventListener('click', function(event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      event.preventDefault();
      alert('Passwords do not match!');
    }
  });