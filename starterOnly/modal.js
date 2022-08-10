// target icon class
const navBar = document.querySelector('.icon');

// make topnav responsive with if else cond
function editNav() {
  const x = document.getElementById('myTopnav');

  if (x.className === 'topnav') {
    x.className += ' responsive';
    makeNavDropDown();
  } else {
    x.className = 'topnav';
    document.querySelector('.navDropdown').remove();
  }
}
// onClick event
navBar.addEventListener('click', editNav);

function makeNavDropDown() {
  // create container for navDropdown
  const navDropdown = document.createElement('div');
  navDropdown.className = 'navDropdown';
  // append navDropdown to .main-navbar
  const mainNavbar = document.querySelector('.main-navbar');
  mainNavbar.appendChild(navDropdown);
  // create ul for navDropdown
  const navDropdownUl = document.createElement('ul');
  navDropdownUl.className = 'navDropdownUl';
  // append ul to navDropdown
  navDropdown.appendChild(navDropdownUl);
  // for each nav-a class, create li and append to ul
  const navLinks = document.querySelectorAll('.nav-a');
  navLinks.forEach((link) => {
    const li = document.createElement('li');
    li.className = 'navDropdownLi';
    li.innerHTML = link.innerHTML;
    navDropdownUl.appendChild(li);
  });
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const xButton = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
xButton.addEventListener('click', closeModal);

// function refresh the page after a click on sucessSubmit
function refreshPage() {
  window.location.reload();
}

// sucessSubmit.addEventListener('click', refreshPage);

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  // submitSucess.remove();
}

//input

const inputs = document.querySelectorAll('input');
// event Listeners for each input

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const errorMsg = document.createElement('span');
    errorMsg.classList.add('error-msg');

    if (e.target.id === 'first' || e.target.id === 'last') {
      isTextInputValid(e.target);
    }
    //
    if (e.target.id === 'email') {
      isEmailValid(e.target);
    }
    //
    if (e.target.id === 'birthdate') {
      isBirthdateValid(e.target);
    }
    //
    if (e.target.id === 'quantity') {
      isQuantityValid(e.target);
    }
    //
    if (
      e.target.id === 'location1' ||
      e.target.id === 'location2' ||
      e.target.id === 'location3' ||
      e.target.id === 'location4' ||
      e.target.id === 'location5' ||
      e.target.id === 'location6'
    ) {
      isLocationValid(e.target);
    }
    //
    if (e.target.id === 'checkbox1') {
      isCheckboxValid(e.target);
    }
  });
});

// btn-submit event listener
const submitBtn = document.querySelector('.btn-submit');
submitBtn.addEventListener('click', (e) => submitForm(e));

// Is location checked
let locationChecked = false;
// submitForm function
function submitForm(e) {
  e.preventDefault();

  if (!isTextInputValid(inputs[0])) return;
  if (!isTextInputValid(inputs[1])) return;

  if (!isEmailValid(inputs[2])) return;
  if (!isBirthdateValid(inputs[3])) return;
  if (!isQuantityValid(inputs[4])) return;
  // if !isLocationValid with inputs 5 to 10 return;

  if (locationChecked === false) return errorMessageLocation();
  if (!isCheckboxValid(inputs[11])) return;
  // if all validations are true, create a div with class form-success and append it to the form
  // create button close and append it to the div
  const formSuccess = document.createElement('div');
  formSuccess.classList.add('content');
  formSuccess.setAttribute('id', 'success');
  formSuccess.innerHTML = '<h2>Merci pour <br/> votre inscription</h2>';
  modalbg.appendChild(formSuccess);
  const buttonClose = document.createElement('div');
  buttonClose.classList.add('button-close', 'submit-close');
  buttonClose.innerHTML = '<h4>Fermer</h4>';
  buttonClose.getAttribute('id', 'btnsuccess');
  formSuccess.appendChild(buttonClose);
  // create span with class close and append it to content div
  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close', 'submit-close');
  closeSpan.getAttribute('id', 'closesuccess');
  formSuccess.appendChild(closeSpan);

  buttonClose.addEventListener('click', refreshPage);
  closeSpan.addEventListener('click', refreshPage);

  document.querySelector('.content').style.display = 'none';
}

// is first and last Name Valid
const errorMsg = document.createElement('span');
errorMsg.classList.add('error-msg');

function isTextInputValid(input) {
  const selectMsg = document.querySelector('.error-msg');
  const regx = /^[A-ZÀ-ÿ][-,a-z. ']+[ ]*$/;
  if (input.value.length >= 2 && regx.test(input.value)) {
    if (selectMsg !== null) {
      selectMsg.remove();
    }

    input.style.border = '1px solid green';
    return true;
  } else {
    if (selectMsg === null) {
      input.style.border = '1px solid red';
      errorMsg.innerHTML = `Veuillez entrer un ${input.name} valide.`;
      input.after(errorMsg);
    }
    return false;
  }
}

// isEmailValid function

function isEmailValid(input) {
  const selectMsg = document.querySelector('.error-msg');
  const regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (input.value.length >= 2 && regx.test(input.value)) {
    if (selectMsg !== null) {
      selectMsg.remove();
    }

    input.style.border = '1px solid green';
    return true;
  } else {
    if (selectMsg === null) {
      input.style.border = '1px solid red';
      errorMsg.innerHTML = `Veuillez entrer un ${input.name} valide.`;
      input.after(errorMsg);
    }
    return false;
  }
}
// isBirthdateValid function

function isBirthdateValid(input) {
  const selectMsg = document.querySelector('.error-msg');
  const regx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (input.value.length >= 2 && regx.test(input.value)) {
    if (selectMsg !== null) {
      selectMsg.remove();
    }

    input.style.border = '1px solid green';
    return true;
  } else {
    if (selectMsg === null) {
      input.style.border = '1px solid red';
      errorMsg.innerHTML = `Veuillez entrer un ${input.name} valide.`;
      input.after(errorMsg);
    }
    return false;
  }
}
// isQuantityValid function

function isQuantityValid(input) {
  const selectMsg = document.querySelector('.error-msg');
  const regex = /\d$/;
  if (regex.test(input.value)) {
    if (selectMsg !== null) {
      selectMsg.remove();
    }

    input.style.border = '1px solid green';
    return true;
  } else {
    if (selectMsg === null) {
      input.style.border = '1px solid red';
      errorMsg.innerHTML = `Veuillez entrer un ${input.name} valide.`;
      input.after(errorMsg);
    }
    return false;
  }
}

// isLocationValid function
function isLocationValid(input) {
  if (input.checked === true) {
    return (locationChecked = true);
  } else {
    return (locationChecked = false);
  }
}
function errorMessageLocation() {
  const selectMsg = document.querySelector('.error-msg');
  if (selectMsg !== null) {
    selectMsg.remove();
  }
  errorMsg.innerHTML = `Veuillez entrer une location valide.`;
  document.querySelector('.city-check').after(errorMsg);
}

// isCheckboxValid function
function isCheckboxValid(input) {
  const selectMsg = document.querySelector('.error-msg');
  if (input.checked === true) {
    document.querySelector('#checkbox2').style.border = '1px solid green';
    if (selectMsg !== null) {
      selectMsg.remove();
    }
    return true;
  } else {
    if (selectMsg === null) {
      document.querySelector('#checkbox2').style.border = '1px solid red';
      errorMsg.innerHTML = `Vous devez vérifier que vous acceptez les termes et conditions.`;
      document.querySelector('#checkbox2').after(errorMsg);
    }
    return false;
  }
}
