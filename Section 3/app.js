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

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 25. DOM Selectors for Multiple Elements
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// return HTMLCollection or a nodelist - both similar to arrays
// can be converted into arrays very easily

// document.getElementsByClassName('')
const items = document.getElementsByClassName('collection-item'); // returns HTMLCollection(5)
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName
const lis = document.getElementsByTagName('li'); // returns HTMLCollection(5)
console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';























  
