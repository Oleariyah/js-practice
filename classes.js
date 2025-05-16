// // all about javascript classes

// class definition
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// // class inheritance
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
//   sayHello() {
//     super.sayHello();
//     console.log(`I am a student. My grade is ${this.grade}`);
//   }
// }

// // class inheritance
// class Teacher extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
//   sayHello() {
//     super.sayHello();
//     console.log(`I am a teacher. My salary is ${this.salary}`);
//   }
// }

// // class static method
// class Person {
//   static sayHello() {
//     console.log("Hello");
//   }
// }

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// mycar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = mycar.show();

class Car {
  color = 'black';
  constructor(color) {
    this.color = color;
  }
  logColor() {
    console.log(`this is color ${this.color}`);
  }
}

let car = new Car('red');
//car.logColor();

class Toyota extends Car {
  constructor(color, model) {
    super(color);
    this.color = color;
    this.model = model;
  }
}
let toyota = new Toyota('blue', 'camry');

toyota.logColor();
console.log(toyota.model);
