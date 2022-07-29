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
console.log(modalbg);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
xButton.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Form
// first name
const firstName = document.querySelector('#first').value;
// last name
const lastName = document.querySelector('#last');
// email
const email = document.querySelector('#email');
// birthdate
const birthdate = document.querySelector('#birthdate');
// quantity
const quantity = document.querySelector('#quantity');
// location1
const location1 = document.querySelector('#location1');
// location2
const location2 = document.querySelector('#location2');
// location3
const location3 = document.querySelector('#location3');
// location4
const location4 = document.querySelector('#location4');
// location5
const location5 = document.querySelector('#location5');
// location6
const location6 = document.querySelector('#location6');
//checkbox1
const checkbox1 = document.querySelector('#checkbox1');
//checkbox2
const checkbox2 = document.querySelector('#checkbox2');
console.log(formData);

const formDataInput = {
  firstName,
  lastName,
  email,
  birthdate,
  quantity,
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  checkbox1,
  checkbox2,
};
//input

const inputs = document.querySelectorAll('input');
// event Listeners for each input
console.log(inputs);
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const errorMsg = document.createElement('span');
    errorMsg.classList.add('error-msg');
    const selectMsg = document.querySelector('.error-msg');
    if (e.target.id === 'first') {
      const regx = /^[A-ZÀ-ÿ][-,a-z. ']+[ ]*$/;
      if (isFirstNameValid(e.target.value) && regx.test(e.target.value)) {
        e.target.style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null) {
        e.target.style.border = '1px solid red';

        errorMsg.innerHTML =
          'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        e.target.after(errorMsg);
      }
    }
    if (e.target.id === 'last') {
      const regx = /^[A-ZÀ-ÿ][-,a-z. ']+[ ]*$/;
      if (
        e.target.value.length < 2 &&
        !regx.test(e.target.value) &&
        selectMsg === null
      ) {
        e.target.style.border = '1px solid red';
        errorMsg.innerHTML =
          'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        e.target.after(errorMsg);
      } else {
        e.target.style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      }
    }
    if (e.target.id === 'email') {
      const regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (regx.test(e.target.value)) {
        e.target.style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null) {
        e.target.style.border = '1px solid red';
        errorMsg.innerHTML = 'Veuillez entrer une adresse email valide.';
        e.target.after(errorMsg);
      }
    }
    if (e.target.id === 'birthdate') {
      const regx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
      if (regx.test(e.target.value)) {
        e.target.style.border = '1px solid green';

        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null) {
        e.target.style.border = '1px solid red';
        errorMsg.innerHTML = 'Vous devez entrer votre date de naissance.';
        e.target.after(errorMsg);
      }
    }
    if (e.target.id === 'quantity') {
      const regex = /\d$/;
      if (regex.test(e.target.value)) {
        e.target.style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null) {
        e.target.style.border = '1px solid red';
        errorMsg.innerHTML = 'Veuillez entrer un nombre.';
        e.target.after(errorMsg);
      }
    }
    if (e.target.id === 'location1') {
      if (e.target.value) {
        e.target.style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null) {
        e.target.style.border = '1px solid red';
        errorMsg.innerHTML = 'Veuillez choisir une option.';
        e.target.after(errorMsg);
      }
    }
    if (e.target.id === 'checkbox1') {
      if (e.target.checked) {
        document.querySelector('#checkbox2').style.border = '1px solid green';
        if (selectMsg !== null) {
          selectMsg.remove();
        }
      } else if (selectMsg === null && !e.target.checked) {
        document.querySelector('#checkbox2').style.border = '1px solid red';
        errorMsg.innerHTML =
          'Vous devez vérifier que vous acceptez les termes et conditions.';
        document.querySelector('#checkbox2').after(errorMsg);
      }
    }
  });
});

function isFirstNameValid(firstName) {
  if (firstName.length < 2) {
    return false;
  }
  return true;
}
// btn-submit event listener
const submitBtn = document.querySelector('.btn-submit');
submitBtn.addEventListener('click', (e) => submitForm(e));

// submitForm function
function submitForm(e) {
  e.preventDefault();
  if (!isFirstValid()) return;
  if (!isLastValid()) return;
  if (!isEmailValid()) return;
  if (!isBirthdateValid()) return;
  if (!isQuantityValid()) return;
  if (!isLocationValid()) return;
  if (!isCheckboxValid()) return;
  // if all validations are true, create a div with class form-success and append it to the form
  // create button close and append it to the div
  const formSuccess = document.createElement('div');
  formSuccess.classList.add('content', 'sucess');
  formSuccess.innerHTML = '<h2>Merci pour <br/> votre inscription</h2>';
  modalbg.appendChild(formSuccess);
  const buttonClose = document.createElement('div');
  buttonClose.classList.add('button-close');
  buttonClose.innerHTML = '<h4>Fermer</h4>';
  formSuccess.appendChild(buttonClose);
  // create span with class close and append it to content div
  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close');
  formSuccess.appendChild(closeSpan);
  // add event listener to the close button
  buttonClose.addEventListener('click', () => closeModal());
  // add event listener to the close span
  closeSpan.addEventListener('click', () => closeModal());

  document.querySelector('.content').style.display = 'none';
}

// isFirstValid function
console.log(inputs[0]);
function isFirstValid() {
  const regx = /^[A-ZÀ-ÿ][-,a-z. ']+[ ]*$/;
  if (inputs[0].value.length >= 2 && regx.test(inputs[0].value)) {
    return true;
  } else {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  }
  return false;
}
// isLastValid function
function isLastValid() {
  const regx = /([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/;
  if (inputs[1].value.length >= 2 && regx.test(inputs[1].value)) {
    return true;
  } else {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  }
  return false;
}
// isEmailValid function
function isEmailValid() {
  const regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (regx.test(inputs[2].value)) {
    return true;
  } else {
    alert('Veuillez entrer une adresse email valide.');
  }
  return false;
}
// isBirthdateValid function
function isBirthdateValid() {
  const regx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (regx.test(inputs[3].value)) {
    return true;
  } else {
    alert('Vous devez entrer votre date de naissance.');
  }
  return false;
}
// isQuantityValid function
function isQuantityValid() {
  const regex = /\d$/;
  if (regex.test(inputs[4].value) && inputs[4].value >= 0) {
    return true;
  } else {
    alert('Veuillez entrer un nombre.');
  }
  return false;
}
// isLocationValid function
function isLocationValid() {
  if (inputs[5].checked === true) {
    return true;
  } else {
    alert('Veuillez choisir une option.');
  }
  return false;
}

// isCheckboxValid function
function isCheckboxValid() {
  if (inputs[11].checked === true) {
    return true;
  } else {
    alert('Vous devez vérifier que vous acceptez les termes et conditions.');
  }
  return false;
}
console.log(inputs[11]);
