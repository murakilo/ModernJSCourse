// Modern JavaScript From The Beginning
// Instructor: Brad Traversy
// https://www.udemy.com/course/modern-javascript-from-the-beginning/

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Section 3: DOM Manipulation & Events
// 23. Examining the Document Object
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

let val;

val = document;
val = document.all;
val = document.all[9];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method; // get
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; // returns a DOMTokenList containing classNames
val = document.links[0].classList[1]; 
val = document.links[0].classList[1];

val = document.scripts;
// val = document.scripts[2].getAttribute('src');
for (var i = 0; i < val.length; i++) {
  console.log(val[i].getAttribute('src')); // returns relative src (filename)
}
for (var i = 0; i < val.length; i++) {
  console.log(val[i].src); // returns full src (hostname/folder/filename)
}
// convert to array and foreach
let scriptsArray = Array.from(document.scripts);
scriptsArray.forEach(function(script) {
  console.log(script.src);
});

console.log(val);
























  
