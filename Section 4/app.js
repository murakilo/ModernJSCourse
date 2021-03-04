// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// SECTION 4 - DOM Projects
// 34-36 Task List
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();
function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // addTask event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('input', filterTasks);
}

/** get all tasks from local storage and generate taskList*/
function getTasks() {
  let tasks = JSON.parse(checkTasksCookie());
  tasks.forEach(function(task) {
    addListItem(task);
  });
}

/** generates li element inside ul.collection for a task 
 *  @param {string} taskName value of task
*/
function addListItem(taskName) {
  // create li element to place new task in
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li
  li.textContent = taskName;
  // create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link element to list item
  li.appendChild(link);
  // append list item to ul
  taskList.appendChild(li);
}

/** check tasks cookie is valid. reset if invalid
 * @returns localStorage 'tasks' object
*/
function checkTasksCookie() {
  let existingTasks = localStorage.getItem('tasks');
  try {
    JSON.parse(existingTasks);
    if (!existingTasks) {
      console.log('tasks cookie is null. setting to empty array string.');
      localStorage.setItem('tasks', '[]');
    }
  }
  catch(error) {
    console.error(error);
    console.log('existing tasks cookie is invalid. resetting to empty array.');
    localStorage.setItem('tasks', '[]');
  }
  return localStorage.getItem('tasks');
}

/** add task to Tasks list 
 *  @param {Element} e element calling event
*/
function addTask(e) {
  let newTask = taskInput.value;
  // check value is not empty
  if (checkEmpty(newTask)) {
    alert('Task field empty');
  } 
  else {
    newTask = newTask.trim();
    addListItem(newTask);
    // store task in local storage
    storeTaskInLocal(newTask);
  }

  // clear taskInput value & prevent page reload
  taskInput.value = '';
  e.preventDefault();
}

/** add task to local storage 
 *  @param {string} inTask task value
 */
function storeTaskInLocal(inTask) {
  let tasksArray = JSON.parse(checkTasksCookie());
  tasksArray.push(inTask); // push inTask into array
  localStorage.setItem('tasks', JSON.stringify(tasksArray)); // overwrite local tasks with tasksArray
}

/** remove task from task list and local storage 
 *  @param {Element} e element calling event */
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // remove li element
    e.target.parentElement.parentElement.remove();
    
    // remove from local storage
    let tasks = JSON.parse(checkTasksCookie());
    const taskDeleteValue = e.target.parentElement.parentElement.textContent;
    
    // removes ALL values that match
    //tasks = tasks.filter(task => task !== taskDeleteValue);

    // removes first value that matches
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] == taskDeleteValue) {
        tasks.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

/** clears task list and local storage 
 *  @param {Element} e element calling event */
function clearTasks(e) {
  // two methods
  //taskList.innerHTML = '';
  // faster method - loop through
  if (confirm('Clearing task list. Are you sure?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  // clear tasks from localStorage
  // localStorage.setItem('tasks', '[]');
  localStorage.clear();
}

/** filter task list based on input. updates with every input 
 * @param {Element} e element calling event */
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
  });
}

/** check if task field is empty using regex 
 * @param {string} inText text to check if empty
 * @returns {Boolean} returns true if field is empty */
function checkEmpty(inText) {
  inText = inText.replace(/^\s+/, '').replace(/\s+$/, ''); // remove all whitespace from inText
  if (inText === '') {
    return true;
  }
  else {
    return false;
  }
}