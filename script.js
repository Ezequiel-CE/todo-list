'use strict';

////////////////////////////////////// SELECTORS

const userInput = document.querySelector('input');
const btnSubmit = document.querySelector('.btn');
const uList = document.querySelector('ul');
const btnClear = document.querySelector('.btn-clear');

////////////////////////////////////////functions

// create item
const createItem = function (input) {
  const html = `<div class="item">
                    <li>${input}</li>
                    <button class="btn btn-delete">❌</button>
                  </div>`;

  uList.insertAdjacentHTML('afterbegin', html);

  userInput.value = '';
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

// togle item

const toggleItem = function (e) {
  if (e.target.nodeName === 'LI') {
    e.target.classList.add('done');
  }
};

//delete item done function

const deleteDone = function (e) {
  e.preventDefault();
  document.querySelectorAll('.done').forEach(item => item.parentNode.remove());
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

//delete clear

btnClear.addEventListener('click', deleteDone);
