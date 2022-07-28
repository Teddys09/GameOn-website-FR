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

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}
