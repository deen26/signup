const email = document.forms['form']['username'];
const password = document.forms['form']['email'];
const email = document.forms['form']['pasword'];
const password = document.forms['form']['confirm_password'];

const username_error = document.getElementById('username_error');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');
const confirm_pass_error = document.getElementById('confirm_pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
