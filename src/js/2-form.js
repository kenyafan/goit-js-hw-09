const form = document.querySelector('.feedback-form');

const saveFormState = () => {
  const formDataSave = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataSave));
};

const loadFromLS = () => {
  const formDataLoad = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formDataLoad) {
    form.email.value = formDataLoad.email;
    form.message.value = formDataLoad.message;
  }
};

loadFromLS();

form.addEventListener('input', saveFormState);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
