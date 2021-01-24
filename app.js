// Modern JavaScript From The Beginning
// Instructor: Brad Traversy
// https://www.udemy.com/course/modern-javascript-from-the-beginning/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Section 2: JavaScript Language Fundamentals
//  6. Using the console
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 7. Variables - var, let, & const
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // 8. Data Types in JavaScript
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
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


// ~~~~~~~~~~~~~~~~~~
// 9. Type Conversion
// ~~~~~~~~~~~~~~~~~~

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~
// 10. Numbers & the Math Object
// ~~~~~~~~~~~~~~~~~~~~~~~~~

const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0 (remainder)

// Math Object
val = Math.PI; // 3.141593
val = Math.E; // 2.718282
val = Math.round(2.8); // 3
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-24.3); // 24.3
val = Math.pow(8, 3); // 512
val = Math.min(2,66,43,66,-8) // -8
val = Math.max(2,66,43,66,-8) // 66
val = Math.max(); // infinity
val = Math.random(); // random decimal (between 0 and 1)
val = Math.random() * 20 + 2; // random decimal between 2 and 20 (non inclusive)
val = Math.floor(Math.random() * 20 + 1); // random whole between 1 and 20 (non inclusive)


console.log(val);










  
