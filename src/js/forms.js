import Validator from './classes/Validator';

export function initForms() {
  const forms = document.querySelectorAll('form:not([method="GET"])');

  if (!forms) {
    return;
  }

  forms.forEach((form) => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const fd = new FormData(form);
  const submit = form.querySelector('input[type="submit"]');

  if (!validateForm(form)) {
    return;
  }

  fetch('/ajax/form.php', {
    method: 'POST',
    body: fd,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        submit.value = 'Отправлено';
        submit.setAttribute('disabled', 'disabled');
      }
    });
}

function validateForm(form) {
  const validator = new Validator(form);

  return validator.validate();
}
