// constructors and the 'this' keyword

// this refers to the current instance of the object
// using this inside of the global scope (a.k.a outside a function) it will return the window object
//this.alert('hello'); // this line works because the window has the function 'alert()'

// Person constructor
// Constructors start with a capital
function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  // a method is a function thats inside of an object
  this.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
  }
}

// to instantiate you use 'new'
const josh = new Person('josh', '1993-11-13');
const colin = new Person('colin', 26);

console.log(josh.calcAge());