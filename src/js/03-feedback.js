import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name = email]');
const textarea = document.querySelector('textarea[name = message]');

const userData = {};
getLocalData();

userForm.addEventListener('input', throttle(onUserInputForm, 500));
userForm.addEventListener('submit', onFormSubmit);

function onUserInputForm(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
}
function getLocalData() {
  const saveUserData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveUserData) {
    userEmail.value = saveUserData.email;
    textarea.value = saveUserData.message;
  }
}
