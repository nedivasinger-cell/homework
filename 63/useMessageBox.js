import showMessage from "./messageBox.js";

showMessage('it works!');


const msgInput = document.querySelector('#msg');
const buttonsInput = document.querySelector('#buttons');

document.querySelector('#showMessage').addEventListener('submit', (e) => {
  e.preventDefault();
  let buttons = null;
  if(buttonsInput.value) {
    buttons = buttonsInput.value.split(',').map(b => b.trim());
  }
  showMessage(msgInput.value, buttons);
  msgInput.value = '';
  buttonsInput.value = '';
});