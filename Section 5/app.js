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

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// // s5 45
// // built in constructors
// // String
// const name1 = 'Josh';
// const name2 = new String('Josh');
// name1.foo = 'bar';
// name2.foo = 'bae'; // using the new keyword allows you to add properties to String
// console.log(name1); // logs string
// console.log(typeof name1);
// console.log(name2); // logs object
// console.log(typeof name2);

// if (name2 === 'Josh') { // logs no
//   console.log('yes');
// } else {
//   console.log('no');
// }
// if (name2 == 'Josh') { // logs yes. not checking type, just value.
//   console.log('yes');
// } else {
//   console.log('no');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);
// console.log(typeof num2); // returns object

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool2); // returns object

// // Function
// const getSum1 = function(x, y) {
//   return x + y;
// }
// const getSum2 = new Function('x', 'y', 'return x + y')
// console.log(getSum1(1, 2));
// console.log(getSum2(1, 2));

// // Object
// const john1 = {name: 'John'};
// const john2 = new Object({name: 'John'})
// console.log(john1);
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3];
// const arr2 = new Array(1,2,3,4);
// console.log(arr1);
// console.log(arr2);

// // RegExp
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+'); // doing regExp doesnt escape characters
// console.log(re1);
// console.log(re2);

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// // s5 46
// // Prototypes Explained

// // ES5 JS does not use classes

// // Object literals inherit from Object.prototype
// // When building objects from constructors we created, the object will come from that prototype
// // - i.e. Person.prototype (from the last lesson)
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return ageDate.getUTCFullYear() - 1970;
// }

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// // Gets married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person('john', 'smith', '1993-11-13');
// const mollie = new Person('mollie', 'maguire', 'Feb 16 1989')

// console.log(mollie);
// console.log(mollie.calculateAge());
// console.log(mollie.getFullName());
// mollie.getsMarried('cullen');
// console.log(mollie.getFullName());
// console.log(mollie.hasOwnProperty('firstName')); // returns true - the property exists already in the object 
// console.log(mollie.hasOwnProperty('getFullName')); // returns false - this is in the prototype. not the object


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// // s5 47
// // Prototypal Inheritance

// // Person object, then customer object that will inherit person

// // person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // greeting function
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Josh', 'Cullen');
// // console.log(person1.greeting());

// // customer constructor
// function Customer(firstName, lastName, phoneNum, membership) {
//   Person.call(this, firstName, lastName); // calls the properties from the person constructor
//   this.phoneNum = phoneNum;
//   this.membership = membership;
// }

// // inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // make Customer.prototype return customer
// Customer.prototype.constructor = Customer;

// // create customer
// const customer1 = new Customer('Mollie', 'Maguire', '917-716-0635', 'Standard');
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}. Welcome to our business.`;
// }
// console.log(customer1.greeting());


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// // s5 48
// // Object.create()

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);
// console.log(mary.greeting());
// mary.getsMarried('Werle');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// brad.lastName = 'farts';
// console.log(brad.greeting());

// console.log(brad);
// console.log(brad.greeting());
// brad.getsMarried('farts');
// console.log(brad.greeting());

// console.log(Object.entries(mary));

// // s5 49
// // ES6 Classes

// // all of ES6 is compatible with modern browsers.
// // IE11 requires compiling down to ES5

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calcAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');
// console.log(mary);
// console.log(mary.calcAge());
// mary.getsMarried('Cullen');

// // to access static method use class name, not object name
// console.log(Person.addNumbers(1,2))

// s5 50
// Sub classes
// inheritance in ES6 classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// sub class of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // use inherited
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Krasinski', '909-735-9873', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipCost());