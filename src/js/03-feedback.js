import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name = email]');
const textarea = document.querySelector('textarea[name = message]');

userForm.addEventListener('input', throttle(onUserInputForm, 500));
userForm.addEventListener('submit', onFormSubmit);

const userData = {};
const KEY_STORAGE = 'feedback-form-state';

function onUserInputForm(event) {
  userData[event.target.name] = event.target.value;

  try {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(userData));
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
  localStorage.removeItem(KEY_STORAGE);
  console.log(userData);
}

getLocalData();

function getLocalData() {
  try {
    const saveUserData = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (saveUserData) {
      userEmail.value = saveUserData.email || '';
      textarea.value = saveUserData.message || '';
    }
  } catch (error) {
    console.log(error.message);
  }
}
