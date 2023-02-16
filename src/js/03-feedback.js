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

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  } catch (error) {
    console.log(error.message);
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (userEmail.value === '' || textarea.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
}

function getLocalData() {
  try {
    const saveUserData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (saveUserData.email) {
      userEmail.value = saveUserData.email;
    }
    if (saveUserData.message) {
      textarea.value = saveUserData.message;
    }
  } catch (error) {
    console.log(error.message);
  }
}
