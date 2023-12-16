import throttle from 'lodash.throttle';
const form = document.querySelector('form.feedback-form');
const submit = document.querySelector('button');
const email = document.querySelector('input').value;
const message = document.querySelector('textarea').value;

form.addEventListener('input', event => {
  localStorage.setItem('feedback-form-state', event.target.value);
});

form.addEventListener('message', event => {
  localStorage.setItem('feedback-form-state', event.target.value);
});
form.addEventListener(
  'submit',
  throttle(event => {
    event.preventDefault;
    console.log({
      email: emailInput.value,
      message: messageInput.value,
    });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }, 500)
);
