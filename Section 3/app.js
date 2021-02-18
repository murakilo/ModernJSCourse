// Modern JavaScript From The Beginning
// Instructor: Brad Traversy
// https://www.udemy.com/course/modern-javascript-from-the-beginning/

// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // Section 3: DOM Manipulation & Events
// // 23. Examining the Document Object
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// let val;
// 
// val = document;
// val = document.all;
// val = document.all[9];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// 
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method; // get
// val = document.forms[0].action;
// 
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList; // returns a DOMTokenList containing classNames
// val = document.links[0].classList[1]; 
// val = document.links[0].classList[1];
// 
// val = document.scripts;
// // val = document.scripts[2].getAttribute('src');
// for (var i = 0; i < val.length; i++) {
//   console.log(val[i].getAttribute('src')); // returns relative src (filename)
// }
// for (var i = 0; i < val.length; i++) {
//   console.log(val[i].src); // returns full src (hostname/folder/filename)
// }
// // convert to array and foreach
// let scriptsArray = Array.from(document.scripts);
// scriptsArray.forEach(function(script) {
//   console.log(script.src);
// });
// 
// console.log(val);


// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 24. DOM Selectors for Single Elements
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 
// // Methods to pull things from DOM
// // JQuery was used for a long time for this. Vanilla JS has since gotten a lot 
// // easier to work with and JQuery is now mostly bloat.
// // One thing JQuery is good for - quick simple plugins/scripts
// // 
// // Single vs multiple element selectors
// // Single selectors return the first element that meets requirements
// // Multiple selectors return arrays, HTMLCollections, etc.
// 
// // document.getElementById()
// console.log(document.getElementById('task-title')); // <h5 id="task-title" class="beans">Tasks</h5>
// 
// //  Get things from the element
// console.log(document.getElementById('task-title').id); // task-title
// console.log(document.getElementById('task-title').className); // beans
// 
// const taskTitle = document.getElementById('task-title');
// // change styling
// taskTitle.style.background = '#00FFFF';
// taskTitle.style.color = '#F3FA3D';
// taskTitle.style.padding = '10px';
// // document.getElementById('task-title').style.display = 'none';
// 
// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector()
// console.log(document.querySelector('#task-title')); // <h5 id="task-title" class="beans">Tasks</h5>
// console.log(document.querySelector('.card-title')); // <span class="card-title">Task List</span>
// console.log(document.querySelector('h5')); // <h5 id="task-title" class="beans">Tasks</h5>
// 
// document.querySelector('li').style.color = 'red'; // changes first (not all) li item to red font color
// document.querySelector('ul li').style.color = 'blue'; // changes first (not all) li item (inside ul) to red font color
// document.querySelector('li:last-child').style.color = 'yellow'; // changes last li to yellow
// document.querySelector('li:nth-child(3)').style.color = 'green'; // changes third li to green
// document.querySelector('li:nth-child(4)').textContent = 'beans'; // changes fourth li to read 'beans'
// document.querySelector('li:nth-child(odd)').style.background = '#000'; // changes first (odd) li background to black
// document.querySelector('li:nth-child(even)').style.background = '#D0D0D0'; // changes second (even) li background to grey
// // use querySelectorAll to grab all odd/even elements

// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 25. DOM Selectors for Multiple Elements
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// // return HTMLCollection or a nodelist - both similar to arrays
// // can be converted into arrays very easily
// 
// // document.getElementsByClassName('')
// const items = document.getElementsByClassName('collection-item'); // returns HTMLCollection(5)
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';
// 
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
// 
// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li'); // returns HTMLCollection(5)
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
// 
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: beans`;
// });
// console.log(lis);
// 
// // document.querySelectorAll()
// const items2 = document.querySelectorAll('ul.collection li.collection-item'); // returns a nodelist
// console.log(items2);
// // can do forEach on nodelist without converting to array
// items2.forEach(function(item) {
//   item.textContent = 'boostio';
// });
// 
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
// liOdd.forEach(function(li, index) {
//   li.style.background = 'grey';
// });
// for (let i=0; i < liEven.length; i++) { // this can be done on an HTMLCollection also
//   liEven[i].style.background = 'red';
// }


// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 26. Traversing The DOM
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// // parents and children of nodes
// 
// let val;
// const list = document.querySelector('ul.collection'); // selects first ul element with a class of collection
// const listItem = document.querySelector('li.collection-item:first-child'); // selects first li element with a class of collection
// 
// // get child nodes
// val = list.childNodes; // returns a nodelist containing all NODES (not just elements) meeting req
// // there are text nodes between li elements. these are the linebreaks
// val = list.childNodes[0].nodeName; // #text
// val = list.childNodes[0].nodeType; // 3
// val = list.childNodes[1].nodeType; // 1 - number is a 'dictionary key'
// // NODETYPES
// // 1 - element
// // 2 - attribute (deprecated)
// // 3 - text node
// // 8 - comment
// // 9 - document itself (document tag)
// // 10 - doctype
// 
// val = list.children; // returns a HTMLCollection but returns only elements. no line breaks or comments etc.
// val = list.children[1];
// val = list.children[1].textContent = 'HELLOOOO';
// val = list.children[3].children[0].id = 'testLink';
// val = list.children[3].children[0];
// 
// // first child
// val = list.firstChild; // #text
// val = list.firstElementChild; // returns first li element
// // last child
// val = list.lastChild; // #text
// val = list.lastElementChild; // returns last li element
// // child count
// val = list.childElementCount; // returns 5 - five list items
// 
// // get parent node
// val = listItem.parentNode; // returns ul element encompassing li. COULD return something else i.e. comment
// val = listItem.parentElement; // returns ul element encompassing li. will always return parent element
// val = listItem.parentElement.parentElement; // returns parent of parent - div.card-action
// 
// // get next sibling
// val = listItem.nextSibling; // #text - gets next node after first li. in this case, the linebreak
// val = listItem.nextElementSibling; // returns next li element
// // get previous subling
// val = listItem.previousSibling; // #text
// val = listItem.previousElementSibling; // null
// 
// console.log(val);

// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 27. Creating elements
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// // how to create elements, add it to DOM, etc.
// // create li item and add to end of ul collection
// 
// // create element
// const li = document.createElement('li'); // <li></li>
// // add class
// li.className = 'collection-item'; // <li class="collection-item"></li>
// // add id
// li.id = 'new-item'; // <li class="collection-item" id="new-item"></li>
// // add attribute
// li.setAttribute('title', 'New Item'); // <li class="collection-item" id="new-item" title="New Item"></li>
// // create text node and append
// li.appendChild(document.createTextNode('hello world')); //<li class="collection-item" id="new-item" title="New Item">hello world</li>
// // create new link element
// const link = document.createElement('a'); // <a></a>
// // add classes
// link.className = 'delete-item secondary-content'; // <a class="delete-item secondary-content"></a>
// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>'; // <a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
// // append link element into li
// li.appendChild(link); // <li class="collection-item" id="new-item" title="New Item">hello world<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>
// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li);
// 
// 
// console.log(li);

// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 28. Removing & Replace elements
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// // replacing elements
// // h5 to h2
// // create the new element that we are replacing the old one with (h2)
// const newHeading = document.createElement('h2'); // <h2></h2>
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List')); // <h2 id="task-title">Task List</h2>
// 
// // get the old heading to be replaced (h5)
// const oldHeading = document.getElementById('task-title');
// // we need parent of this element as we are going to use replaceChild()
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading, oldHeading); // The Task List element will now be larger
// 
// 
// // removing elements
// const lis = document.querySelectorAll('li'); // gets all list items
// const list = document.querySelector('ul'); // only one ul to get
// // remove list item
// lis[0].remove(); // removes first li
// // remove child element
// list.removeChild(lis[3]);
// 
// // classes and attributes
// const firstLi = document.querySelector('li:nth-child(1)'); // gets first li
// const link = firstLi.children[0];
// 
// let val;
// 
// // classes
// val = link.className; // delete-item secondary-content
// val = link.classList;
// val = link.classList[0]; // delete-item
// link.classList.add('test'); // adds 'test' to class attribute
// link.classList.remove('test'); // removes 'test
// val = link;
// 
// // attributes
// val = link.getAttribute('href'); // #
// val = link.setAttribute('href', 'https://www.google.com'); // link now points to google
// val = link.hasAttribute('href'); // true
// val = link.hasAttribute('title'); // false
// val = link;
// link.setAttribute('title', 'gogle');
// link.removeAttribute('title'); 
// 
// console.log(val);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 29. Event Listeners & The Event Object
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// we can listen for events on anything in the DOM
// we'll add an eventListener on the CLEAR TASKS button

const clearTasksBtn = document.querySelector('.clear-tasks');
// clearTasksBtn.addEventListener('click', function(e) {
//   console.log('hello world');  
//   e.preventDefault();
// });
// clicking this button will cause the browser to reload. this is due to the empty href tag
// we can stop this behaviour by setting href to '#' or by preventing the default behaviour in the callback function
clearTasksBtn.setAttribute('href', '#');

clearTasksBtn.addEventListener('click', onClick);
function onClick(e) {
  //console.log('clicked');
  //e.preventDefault();
  let val;
  val = e; // lists MouseEvent event listener
  // clientX/clientY returns position in page of where the event happened
  // shiftKey tells us if shift was held when the event happened
  // timestamp returns time of event
  // target represents element that captured event (in this case, the a tag)
  
  // event target element
  val = e.target; // returns element
  val = e.target.id; // returns element ID (blank in this case)
  val = e.target.className; // returns element class - clear-tasks btn black
  val = e.target.classList; // returns DOMTokenList of classes
  e.target.innerText = 'hello'; // changes text in button to 'hello'
  
  val = e.type; // click
  val = e.timeStamp; // returns time of event in milliseconds since pageload
  val = e.clientX; // returns x coordinate of event relative to window size
  val = e.clientY; // returns y coordinate of event relative to window size
  val = e.offsetX; // returns x coord relative to element position
  val = e.offsetY; // returns y coord relative to element position
  
  console.log(val);
}





console.log(clearTasksBtn);




























  
