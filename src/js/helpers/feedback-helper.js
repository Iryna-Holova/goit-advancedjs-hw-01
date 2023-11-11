import common from '../common';

/**
 * Handles the input event on the form and saves the form data to local storage.
 */
function handleDataSave() {
  const { email, message } = this.elements;

  // Create an object with the email and message values from the form.
  const formData = {
    email: email.value,
    message: message.value,
  };

  // Save the form data to local storage in JSON format.
  localStorage.setItem(common.LS_KEY_FORM, JSON.stringify(formData));
}

/**
 * Handles the form submission event, preventing the default behavior,
 * validating the form fields, logging the form data, resetting the form,
 * and removing saved data from local storage.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;
  if (!email.value || !message.value) {
    alert('Please fill all fields');
    return;
  }

  const formData = {
    email: email.value,
    message: message.value,
  };

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(common.LS_KEY_FORM);
}

export { handleDataSave, handleFormSubmit };
