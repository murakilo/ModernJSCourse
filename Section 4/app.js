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
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('input', filterTasks)

  console.log('Event listeners loaded.');
}

// add task to Tasks list
function addTask(e) {
  // check value is not empty
  if (checkEmptyTask(taskInput.value)) {
    alert('Task field empty');
  } 
  else {
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
  }

  // clear taskInput value & prevent page reload
  taskInput.value = '';
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearTasks(e) {
  // two methods
  //taskList.innerHTML = '';
  // faster method - loop through
  if (confirm('Clearing task list. Are you sure?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

function filterTasks(e) {
  const filterText = e.target.value.toLowerCase();
  const allTasks = document.querySelectorAll(".collection-item");
  allTasks.forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(filterText) != -1) { // if filterText is not found, -1 returned
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  })

  console.log(filterText);
}

// check if task field is empty using regex
function checkEmptyTask(inText) {
  inText = inText.replace(/^\s+/, '').replace(/\s+$/, ''); // remove all whitespace from inText
  console.log(inText);
  if (inText === '') {
    return true;
  }
  else {
    return false;
  }
}