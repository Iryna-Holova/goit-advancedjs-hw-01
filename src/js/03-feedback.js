import throttle from 'lodash.throttle';
import common from './common';
import * as helper from './helpers/feedback-helper';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', throttle(helper.handleDataSave, 500));
form.addEventListener('submit', helper.handleFormSubmit);

// Check if there is saved form data in the local storage and populate the form fields if available.
if (localStorage.getItem(common.LS_KEY_FORM)) {
  try {
    const savedData = JSON.parse(localStorage.getItem(common.LS_KEY_FORM));
    // Set the email and message values from the saved data, defaulting to an empty string if undefined.
    email.value = savedData.email ?? '';
    message.value = savedData.message ?? '';
  } catch (error) {
    console.log(error.message);
  }
}
