// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// SECTION 4 - DOM Projects
// 34. Task List 1 - UI & Add Task Items
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners() {
  // addTask event
  form.addEventListener('submit', addTask);

  console.log('Event listeners loaded.')
}

// add task to Tasks list
function addTask(e) {
  // check value is not empty
  if (!taskInput.value) {
    alert('Task field empty');
  }
  // create li element to place new task in
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content'; // secondary-content justifies element to right
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link element to list item
  li.appendChild(link);
  // append list item to ul
  taskList.appendChild(li);

  console.log(`Added ${taskInput.value} to Task List`);
  
  // clear taskInput value
  taskInput.value = '';

  e.preventDefault();
}