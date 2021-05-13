// Section 5
// Object Oriented JavaScript
// ES5 & ES2015

// // s5 44
// // constructors and the 'this' keyword

// // this refers to the current instance of the object
// // using this inside of the global scope (a.k.a outside a function) it will return the window object
// //this.alert('hello'); // this line works because the window has the function 'alert()'

// // Person constructor
// // Constructors start with a capital
// function Person(name, dob) {
//   this.name = name;
//   //this.age = age;
//   this.birthday = new Date(dob);
//   // a method is a function thats inside of an object
//   this.calcAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;
//   }
// }

// // to instantiate you use 'new'
// const josh = new Person('josh', '1993-11-13');
// const colin = new Person('colin', 26);

// console.log(josh.calcAge());


// s5 45
// built in constructors
// String
const name1 = 'Josh';
const name2 = new String('Josh');
name1.foo = 'bar';
name2.foo = 'bae'; // using the new keyword allows you to add properties to String
console.log(name1); // logs string
console.log(typeof name1);
console.log(name2); // logs object
console.log(typeof name2);

if (name2 === 'Josh') { // logs no
  console.log('yes');
} else {
  console.log('no');
}
if (name2 == 'Josh') { // logs yes. not checking type, just value.
  console.log('yes');
} else {
  console.log('no');
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); // returns object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2); // returns object

// Function
const getSum1 = function(x, y) {
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y')
console.log(getSum1(1, 2));
console.log(getSum2(1, 2));

// Object
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'})
console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

// RegExp
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // doing regExp doesnt escape characters
console.log(re1);
console.log(re2);