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

  // toggle function
  // const liArr = [...document.querySelectorAll('li')];

  // console.log(liArr);

  // liArr.forEach(li =>
  //   li.addEventListener('click', function () {
  //     li.classList.add('done');
  //   })
  // );
};

//delete item

const deleteItem = function (e) {
  if (e.target.classList.contains('btn-delete')) {
    e.target.parentNode.remove();
  }
};

////////////////////////////////////// events handlers

//clean the list
uList.innerHTML = '';

//add item

btnSubmit.addEventListener('click', addElement);

//delete item

uList.addEventListener('click', deleteItem);
