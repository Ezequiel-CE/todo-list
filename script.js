'use strict';

////////////////////////////////////// SELECTORS

const userInput = document.querySelector('input');
const btnSubmit = document.querySelector('.btn');
const uList = document.querySelector('ul');

////////////////////////////////////////functions

// create item
const createItem = function (input) {
  const html = `<div class="item">
                    <li>${input}</li>
                    <button class="btn btn-delete">x</button>
                  </div>`;

  uList.insertAdjacentHTML('afterbegin', html);

  userInput.value = '';
  userInput.blur();
};

// add item

const addElement = function (e) {
  e.preventDefault();

  if (userInput.value !== '') {
    createItem(userInput.value);
  }
};

//delete item

const deleteItem = function (e) {
  if (e.target.classList.contains('btn-delete')) {
    e.target.parentNode.remove();
  }
};

const toggleItem = function (e) {
  if (e.target.nodeName === 'LI') {
    e.target.classList.add('done');
  }
};

////////////////////////////////////// events handlers

//clean the list
uList.innerHTML = '';

//add item

btnSubmit.addEventListener('click', addElement);

//delete item

uList.addEventListener('click', deleteItem);

//togle item

uList.addEventListener('click', toggleItem);
