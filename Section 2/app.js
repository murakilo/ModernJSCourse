// Modern JavaScript From The Beginning
// Instructor: Brad Traversy
// https://www.udemy.com/course/modern-javascript-from-the-beginning/

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Section 2: JavaScript Language Fundamentals
//  6. Using the console
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// // Log to console
// console.log('hello world'); // log string
// console.log(123); // log interval
// console.log(true); // log bool
// var greeting = "hello there";
// console.log(greeting); // variable
// console.log([1,2,3,4]); // array
// console.log({a:1, b:2}); // objects
// console.table({a:10,b:20}); // table
// console.error('this is an error'); // throws a red error in the console.
// console.clear(); // clear console
// console.warn('this is a warning'); // throws a yellow warning in the console
// console.time('timer1'); // timers. will begin timer here and end timer at console.timeEnd('timerName')
//     console.log('test');
//     console.log('test');
//     console.log('test');
//     console.log('test');
//     console.log('test');
//     console.log('test');
//     console.log('test');
// console.timeEnd('timer1');
// //alert('hello'); // makes the browser alert the user


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 7. Variables - var, let, & const
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// // var, let, const
// // let and const now fully supported by ES6. big advantage at block level scope
// var name = 'John Doe';
// console.log(name);
// name = "steve smith";
// console.log(name);
//
// // Init a variable
// var greeting;
// console.log(greeting);
// greeting = 'greetings earthlings';
// console.log(greeting);
//
// // variable names can contain letters, numbers, _, $
// // cannot start with a number
// //var 1name = 'Josh'; // throws syntax error
// var $name = 'josh'; // not recommended. only use when using jquery when selecting things from dom which globally uses dollar sign. if setting variable to jquery object use this.
// var _name = 'josh'; // not suggested. used for private variables, depends on scope/framework/etc.
//
// // Multiword Variables - camelCase
// var firstName = 'josh'; // camelCase
// var first_name = 'mollie'; //underscore
// var FirstName = 'brian'; // PascalCase - used for some OOP mechanics - constructors, classes

// // LET
// let name = 'John Doe';
// console.log(name);
// name = "steve smith";
// console.log(name);
//
// let name1; // undefined
// console.log(name1);

// // CONST
// // const name = 'Josh';
// // console.log(name);
// //name = 'mollie'; // Cannot reassign
// //const greeting; // Must assign a value to const
// const person = { // object literal
//     name: 'john',
//     age: '27'
// }
// console.log(person);
// person.name = 'mollie';
// person.age = 65;
// console.log(person); // can mutate object (change values) but cannot reassign the variable to something else (person will always contain an object with those set properties)
//
// const numbers = [1,2,3,4];
// console.log(numbers);
// numbers.push(5); // can push number into array
// console.log(numbers);

// Use const unless the value is changing, we need to initialize it, or unless we use it in an interator
// Makes it obvious that this value will not be reassigned. Makes code more robust, secure, readable


// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 8. Data Types in JavaScript
// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
//
// // Two types of data types: primitive and reference
// // Primitive - data stored directly in location that variable accesses. Stored on THE STACK
// // Reference - objects accessed by reference. Data is not stored in variable. Stored in THE HEAP. A pointer to a location in memory
//
// // 6 primitive datatypes - string, number (int, double, float, etc. all are Number), boolean, null (intentional empty value), undefined (unintentional empty), symbols (ES6)
// // Reference datatypes - considered objects - arrays, object literals, dates, functions, anything else
//
// // JS = Dynamically typed language - means that datatypes are associated with the values and not variables themselves
// // for example - var name can be set to a string and then reassigned to a number. not locked to datatype
// // Most languages which are statically typed (C#, Java, etc.) cannot do this.
// // There are technologies that can turn JS into a statically typed lanaguage. TypeScript is the most popular - superset of JS (everything JS plus more)
//
// // Primitive types
// // string
// const name = 'josh cullen';
// console.log('nameType = ' + typeof name);
// // number
// const age = 27;
// console.log('ageType = ' + typeof age);
// // boolean
// const hasKids = false;
// console.log('hasKids type = ' + typeof hasKids);
// // null
// const car = null;
// console.log('car type = ' + typeof car); // returns object - technically a bug in JS. null is not an object.
// // See this link for more info on null == object bug: https://stackoverflow.com/questions/18808226/why-is-typeof-null-object
// // undefined
// let test;
// console.log('test type = ' + typeof test);
// // symbol
// const sym = Symbol();
// console.log('symbol type = ' + typeof sym);
//
// // Reference types
// // array
// const hobbies = ['surfing', 'movies', 'music'];
// console.log('hobbies type = ' + typeof hobbies);
// // object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// console.log('address type = ' + typeof address);
// // date
// const today = new Date();
// console.log('current date = ' + today);
// console.log('date type = ' + typeof today);


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 9. Type Conversion
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// let val;
// // number to string
// val = 5;
// // number
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // number to string
// val = String(5);
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // number to string
// val = String(4+4);
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // bool to string
// val = String(true);
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // date to string
// val = String(new Date());
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // array to string
// val = String([1,2,3,4]);
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// // toString()
// val = (5).toString();
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// val = (true).toString();
// console.log(val);
// console.log('type = ' + typeof val);
// console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log('');
// 
// // numeric string to number
// val = Number('5');
// console.log(val);
// console.log('type = ' + typeof val);
// //console.log('length = ' + val.length); // length only works on strings. gives number of chars in string. currently returns undefined
// console.log(val.toFixed(2));
// console.log('');
// // bool to number
// val = Number(true); // returns 1
// console.log(val);
// console.log('type = ' + typeof val);
// console.log(val.toFixed(2));
// console.log('');
// val = Number(false); // returns 0
// console.log(val);
// console.log('type = ' + typeof val);
// console.log(val.toFixed(2));
// console.log('');
// // null to number
// val = Number(null); // returns 0
// console.log(val);
// console.log('type = ' + typeof val);
// console.log(val.toFixed());
// console.log('');
// // string to Number
// val = Number('hello'); // returns NaN
// console.log(val);
// console.log('type = ' + typeof val);
// console.log(val.toFixed());
// console.log('');
// 
// val = parseInt('100.30');
// console.log(val); // returns 100 as an Number
// val = parseFloat('100.30');
// console.log(val); // returns 100.3 as a Number
// console.log(val.toFixed(2)); // returns 100.30 as a string

// // example of type coercion
// const val1 = String(5); // val1 = '5'
// const val2 = 6;  // val2 = 6
// const sum = val1 + val2; // this sees that val1 is a string and attempts to concatenate the next value onto it. thus val2 is converted to a string
// console.log(sum); // output: '56' (aka '5' + '6')
// console.log(typeof sum); // output: string
// console.log(Number(val1 + val2)); // concatenates '5' + '6', then converts '56' to number. output: 56
// console.log(Number(val1) + val2) // converts string '5' to Number 5, then adds 5+6. output: 11
// console.log(Number(val1) + String(val2)) // converts val1 back to a number, but due to val2 now being a string it is still treated as string concatenation. output: '56'


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 10. Numbers & the Math Object
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// const num1 = 100;
// const num2 = 50;
// let val;
// 
// // simple math with numbers
// val = num1 + num2; // 150
// val = num1 * num2; // 5000
// val = num1 - num2; // 50
// val = num1 / num2; // 2
// val = num1 % num2; // 0 (remainder)
// 
// // Math Object
// val = Math.PI; // 3.141593
// val = Math.E; // 2.718282
// val = Math.round(2.8); // 3
// val = Math.round(2.4); // 2
// val = Math.ceil(2.4); // 3
// val = Math.floor(2.8); // 2
// val = Math.sqrt(64); // 8
// val = Math.abs(-24.3); // 24.3
// val = Math.pow(8, 3); // 512
// val = Math.min(2,66,43,66,-8) // -8
// val = Math.max(2,66,43,66,-8) // 66
// val = Math.max(); // infinity
// val = Math.random(); // random decimal (between 0 and 1)
// val = Math.random() * 20 + 2; // random decimal between 2 and 20 (non inclusive)
// val = Math.floor(Math.random() * 20 + 1); // random whole between 1 and 20 (non inclusive)
// 
// 
// console.log(val);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 11. String methods & concatenation
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// const firstName = 'William';
// const lastName = 'Williams';
// const age = 27;
// const str = 'Hello there my name is Josh';
// const tags = 'web design,programming,testTag';
// let val;
// 
// // Concatenation
// val = firstName + lastName; // WilliamWilliams
// val = firstName + ' ' + lastName; // William Williams
// // Append
// val = 'josh ';
// val += 'cullen';
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// 
// // Escaping
// //val = 'that's awesome. I can't wait.'; // fails
// val = "That's awesome. I can't wait.";
// val = 'That\'s awesome. I can\'t wait.';
// 
// // length
// val = firstName.length; // 7
// 
// // Concat
// val = firstName.concat(' ', lastName); // William Williams
// 
// // change case
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();
// // index
// val = firstName[2]; // l
// val = firstName.indexOf('a'); // 5 - gives index of first character found
// val = firstName.lastIndexOf('l'); // 3 - returns index of first character returned beginning from end of array (second l)
// // charAt()
// val = firstName.charAt('1'); // i
// // get last char
// val = firstName.charAt(firstName.length - 1); // m - last char in string
// // substring()
// val = firstName.substring(0,4); // Will
// // slice()
// val = firstName.slice(0,4); // Will - same as substring except for arrays
// val = firstName.slice(-3); // iam - last 3 chars
// // split()
// val = str.split(' '); // returns 6 value array, each index containing a word from the string
// val = tags.split(',') // returns 3 value array split by comma
// // replace()
// val = str.replace('Josh', 'Colin');
// // includes()
// val = str.includes('Hello'); // true - case sensitive
// 
// console.log(val);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 12. Template literals
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// part of ES6 - compatible with all modern browsers. won't work with old versions of IE for example

// const name = 'Josh';
// const age = 27;
// const job = 'Web Developer';
// const city = 'LA';
// let html;
// 
// // without template literals (ES5) - html string
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
// html = '<ul>' + 
//        '<li>Name: ' + name + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>' +
//        '</ul>';
// 
// // with template literals
// function hello() {
//     return 'hello';
// }
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>`
// document.body.innerHTML = html; // found bug with this. 'Uncaught TypeError: Cannot set property 'innerHTML' of null' 
//                                 // The script tag must be in or after the body tag in the html otherwise the javascript is
//                                 // trying to change the innerHTML of a body tag that doesn't exist yet.

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 13. Arrays and Methods
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// const numbers = [1,2,3,4,5];
// const numbers2 = new Array(22,45,33,2,15,3);
// const fruit = ['apple', 'Banana', 'orange', 'lemon'];
// const mixed = [22,'hello',true,undefined,null,{a:1, b:1}, new Date()];
// 
// let val;
// 
// val = numbers.length; // 5
// val = Array.isArray(mixed); // true
// val = Array.isArray('hello'); // false
// val = numbers[2]; // 3
// // arrays are not immutable. we can modify them.
// numbers[2] = 100; // replaces 3 with 100
// val = numbers.indexOf(4);
// 
// // mutating arrays
// numbers.push(44); // adds 44 to end of numbers array
// numbers.unshift(17); // adds 17 to beginning of numbers array
// numbers.pop(); // removes the last value from numbers array
// numbers.shift(); // removes the first value from numbers array
// numbers.splice(1,3); // removes values at indexes 1-3 (inclusive)
// numbers.reverse(); // reverses array
// 
// // concatenate arrays
// val = numbers.concat(numbers2);
// 
// // syntax: array.sort([compareFunction]);
// val = fruit.sort(); // orders string array alphabetically (A-Za-z)
// val = numbers2.sort(); // no argument given, so sort converts the numbers to strings and arranges them in UTF-16 order (i.e. 11, 3, 403, 43, 97)
// val = numbers2.sort(function(x, y) { // sorts numbers in ascending numeric order
//     return x - y;
// });
// val = numbers2.sort(function(x, y) { // sorts numbers in descending numeric order
//     return y - x;
// });
// // about the above compareFunction
// // if compareFunction(a,b) returns less than zero, sort a to an index lower than b (i.e. a comes first)
// // if it returns zero, leave a and b unchanged with respect to eachother - the EMCAScript standard only started guaranteeing this behaviour in 2019
// // if it returns greater than zero, sort b lower than a (i.e. b comes first)
// // it must always return the same value when given a specific pair of elements. if inconsistent results are returned, then the sort order is undefined. One example of this is the use of math.random() within an array.
// 
// // find
// function under50(num) {
//     return num > 50;
// }
// val = numbers.find(under50); // returns the first number in the array that meets the function. undefined if nothing meets it.
// 
// console.log(numbers);
// console.log(val);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 14. Object Literals
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// const person = {
//     firstName: 'josh',
//     lastName: 'cullen',
//     age: 27,
//     email: 'josh@yahoo.com',
//     hobbies: ['detecting', 'buttons'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function() {
//         return 2020 - this.age;
//     }
// };
// let val;
// val = person.firstName; // preferred dot notation
// val = person['lastName']; 
// val = person.age;
// val = person.email;
// val = person.hobbies[1];
// val = person.address.state;
// val = person['address']['city'];
// val = person.getBirthYear();
// 
// const people = [
//     { name: 'josh', age: 27 },
//     { name: 'mollie', age: 31 }
// ];
// 
// for (i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }
// console.log(val);

// // ~ ~ ~ ~ ~ ~ ~ ~ ~
// // 15. Dates & Times
// // ~ ~ ~ ~ ~ ~ ~ ~ ~
// 
// let val;
// const today = new Date(); // giving no argument defaults to current time
// let birthday = new Date('11/13/1993 04:30:00 GMT');
// birthday = new Date(1993, 10, 13, 04, 30, 22); // y,m,d,h,min,s,ms
// birthday = new Date('13 November 1993 UTC');
// 
// val = today;
// val = birthday;
// val = today.getMonth(); // month is zero based for some fkin reason (jan = 0)
// val = today.getDate();
// val = today.getDay(); // returns 5 (numerical day. 5 = friday, 1 = sunday
// val = today.getFullYear(); // returns year (2021)
// val = today.getHours(); // returns 24h time hour
// val = today.getMinutes(); // returns minute number (time is 18:48 so it returns 48)
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // returns epoch time - milliseconds since jan 1st 1970 00:00:00 UTC
// 
// val = birthday;
// birthday.setMonth(6); // sets the month of the today Date object to July
// birthday.setDate(12); // sets day of month to 12th
// birthday.setFullYear(1883); // sets year to 1883 (the year when the USA started using standardized timezones)
// birthday.setHours(3); // sets hour to 3am
// birthday.setMinutes(22); // sets minute to 22
// birthday.setSeconds(59);
// birthday.setMilliseconds(69);
// 
// 
// console.log(typeof val);
// console.log(val);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// 16. If Statements & Comparison Operators
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// const id = 100;
// const id_num = 100;
// const id_string = '100';
// 
// // Equal to
// if (id_num == 100)
//     console.log('id_num is loosely equal to 100! (not strict)');
// else
//     console.log('id_num is not equal to 100! (not strict)');
// 
// // Not equal to
// if (id_num != 100)
//     console.log('id_num is not equal to 100! (not strict)');
// else
//     console.log('id_num is equal to 100! (not strict)');
// 
// if (id_string == 100) // here the string '100' is considered equal to the number 100
//     console.log('id_num is loosely equal to 100! (not strict)');
// else
//     console.log('id_num is not equal to 100! (not strict)');
// // outputs correct, despite being different datatypes.
// 
// // most times you want to test the value AND the type. use ===.
// if (id_num === 100)
//     console.log('id_num is equal to 100! (strict)');
// else
//     console.log('id_num is not equal to 100! (strict)');
// // outputs incorrect as '100' (string) is not equal to 100 (number)
// 
// if (id_string !== 100)
//     console.log('id_num is not equal to 100! (strict)');
// else
//     console.log('id_num is equal to 100! (strict)');
// // returns correct. '100' (string) is not equal to 100 (number)
// 
// // to test if a variable is undefined use the below. 
// // works for both declared and undeclared variables.
// let undefined_var;
// if (typeof undefined_var === 'undefined')
//     console.log('undefined_var is undefined!');
// else
//     console.log(`undefined_var is not undefined!`);
// 
// // greater or less than
// if (id >= 200)
//     console.log('id is greater than 200');
// else
//     console.log('id is not greater than 200');

// // else if
// const colour = 'yellow';
// if (colour === 'red')
//     console.log('colour is red');
// else if (colour === 'blue')
//     console.log('colour is blue');
// else if (colour === 'orange')
//     console.log('colour is orange');
// else
//     console.log('colour is not red, blue, or orange');

// Logical operators
const name = 'Josh';
const age = 65;
const id = 100;

// AND &&
if (age >= 0 && age < 13) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age < 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}
// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} is allowed to run in the race`);
}

// Ternary operator
console.log(id === 100 ? 'ID IS 100' : 'ID IS NOT 100');

// STYLE
// can do if/else statement all on two lines. acceptable if short.
if (false) console.log(`Hello ${name}`);
else console.log(`Goodbye ${name}`);
// can also do if/else this way. 
// do not do this, easy to make error with new lines.
if (true)
  console.log('pls don\'t do this');




































  
