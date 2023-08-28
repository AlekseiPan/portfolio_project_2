/* нажатие кнопки Заказать звонок */

const recallButton = document.querySelector('.page-header__recall-button');
const recallForm = document.querySelector('.about__cost-calculation');
const nameRecallInput = recallForm.querySelector(
  '.about__cost-calculation-name'
);
const phoneRecallInput = recallForm.querySelector(
  '.about__cost-calculation-phone'
);
const submitRecallButton = recallForm.querySelector(
  '.about__cost-calculation-button'
);

let isStorageSupport_name = true;
let storage_name = '';

try {
  storage_name = localStorage.getItem('name');
} catch (err) {
  isStorageSupport_name = false;
}

let isStorageSupport_phone = true;
let storage_phone = '';

try {
  storage_phone = localStorage.getItem('phone');
} catch (err) {
  isStorageSupport_phone = false;
}

recallButton.addEventListener('click', () => {
  if (storage_name && storage_phone) {
    nameRecallInput.value = storage_name;
    phoneRecallInput.value = storage_phone;
    submitRecallButton.focus();
  } else {
    nameRecallInput.focus();
  }
});

recallButton.addEventListener('submit', () => {
  if (isStorageSupport_name && isStorageSupport_phone) {
    localStorage.setItem('name', nameRecallInput.value);
    localStorage.setItem('phone', phoneRecallInput.value);
  }
});

/* нажатие кнопок Запросить расчет стоимости и Расчет стоимости */

const calculationButtons = document.querySelectorAll('.getting-price-button');

const firstCalculationForm = document.getElementById('form-calculation-1');
const secondCalculationForm = document.getElementById('form-calculation-2');

const calculationSection = document.querySelector('.cost-calculation');

const firstNameCalculationInput = firstCalculationForm.querySelector(
  '.cost-calculation__name'
);
const firstPhoneCalculationInput = firstCalculationForm.querySelector(
  '.cost-calculation__phone'
);
const firstMailCalculationInput = firstCalculationForm.querySelector(
  '.cost-calculation__mail'
);
const firstOrganizationCalculationInput = firstCalculationForm.querySelector(
  '.cost-calculation__organization'
);
const firstSpecificationCalculationInput = firstCalculationForm.querySelector(
  '.cost-calculation__attachment-input'
);

const firstAttachmentInput = document.getElementById('file-input-1');
const secondAttachmentInput = document.getElementById('file-input-2');

let isStorageSupport_mail = true;
let storage_mail = '';

try {
  storage_mail = localStorage.getItem('mail');
} catch (err) {
  isStorageSupport_mail = false;
}

let isStorageSupport_organization = true;
let storage_organization = '';

try {
  storage_organization = localStorage.getItem('organization');
} catch (err) {
  isStorageSupport_organization = false;
}

const handleCalculationButtonClick = () => {
  calculationSection.scrollIntoView({ behavior: 'auto', block: 'start' });
  if (storage_name && storage_phone && storage_mail && storage_organization) {
    firstNameCalculationInput.value = storage_name;
    firstPhoneCalculationInput.value = storage_phone;
    firstMailCalculationInput.value = storage_mail;
    firstOrganizationCalculationInput.value = storage_organization;
    firstSpecificationCalculationInput.focus();
  } else {
    firstNameCalculationInput.focus();
  }
};

calculationButtons.forEach((calculationButton) => {
  calculationButton.addEventListener('click', handleCalculationButtonClick);
});

const handleAttachmentInputChange = (attachmentInput) => {
  attachmentLabel = attachmentInput.closest(
    '.cost-calculation__attachment-label'
  );
  attachmentLabel.textContent = attachmentInput.value;
};

firstAttachmentInput.addEventListener('change', (evt) => {
  handleAttachmentInputChange(evt.currentTarget);
});

secondAttachmentInput.addEventListener('change', (evt) => {
  handleAttachmentInputChange(evt.currentTarget);
});

const handleCalculationFormSubmit = (calculationForm) => {
  const nameCalculationInput = calculationForm.querySelector(
    '.cost-calculation__name'
  );
  const phoneCalculationInput = calculationForm.querySelector(
    '.cost-calculation__phone'
  );
  const mailCalculationInput = calculationForm.querySelector(
    '.cost-calculation__mail'
  );
  const organizationCalculationInput = calculationForm.querySelector(
    '.cost-calculation__organization'
  );
  const attachmentLabel = calculationForm.querySelector(
    '.cost-calculation__attachment-label'
  );
  if (
    isStorageSupport_name &&
    isStorageSupport_phone &&
    isStorageSupport_mail &&
    isStorageSupport_organization
  ) {
    localStorage.setItem('name', nameCalculationInput.value);
    localStorage.setItem('phone', phoneCalculationInput.value);
    localStorage.setItem('mail', mailCalculationInput.value);
    localStorage.setItem('organization', organizationCalculationInput.value);
  }
  calculationForm.reset();
  attachmentLabel.textContent = 'Прикрепить файл';
};

firstCalculationForm.addEventListener('submit', (evt) => {
  handleCalculationFormSubmit(evt.currentTarget);
});

secondCalculationForm.addEventListener('submit', (evt) => {
  handleCalculationFormSubmit(evt.currentTarget);
});

/* открытие ответа на часто задаваемые вопросы по нажатию кнопки */

faqButtons = document.querySelectorAll('.faq__button');

const handleFaqButtonClick = (button) => {
  faq = button.closest('.faq__item');
  faqAnswar = faq.querySelector('.faq__answer');
  faqAnswar.classList.toggle('hidden');
};

faqButtons.forEach((faqButton) => {
  faqButton.addEventListener('click', (evt) => {
    handleFaqButtonClick(evt.currentTarget);
  });
});
