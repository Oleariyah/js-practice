//Class-Like Behavior with Functions
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  };
}

const person1 = new Person('Sadiq', 28);
console.log(person1.greet()); // Output: Hi, I'm Sadiq and I'm 28 years old.

//Adding Methods via Prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to the prototype
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

const person2 = new Person('John', 30);
console.log(person2.greet()); // Output: Hi, I'm John and I'm 30 years old.

//Inheritance with Constructor Functions

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `A ${this.type} makes a sound.`;
};

// Inherit Animal
function Dog(name) {
  Animal.call(this, 'dog'); // Call the parent constructor
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // Set up inheritance
Dog.prototype.constructor = Dog;

Dog.prototype.greet = function () {
  return `${this.name}, the ${this.type}, says Woof!`;
};

const myDog = new Dog('Buddy');
console.log(myDog.speak()); // Output: A dog makes a sound.
console.log(myDog.greet()); // Output: Buddy, the dog, says Woof!
