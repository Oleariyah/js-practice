// //Assign by value

// let value = 2;
// let value1 = value;

// value1++;

// console.log(value);
// console.log(value1);

// //Assign by reference

// let obj = {
//   value: 2,
// };
// let obj1 = obj;

// obj1.value++;

// console.log(obj);
// console.log(obj1);

// //When the compound value in a variable is reassigned, a new reference is created. In JavaScript, unlike in most other popular programming languages, the references are pointers to values stored in variables and NOT pointers to other variables, or references.

// let firestorm = [3, 6, 3];
// let atom = firestorm; //assign-by-reference
// console.log(firestorm); //[3,6,3]
// console.log(atom); //[3,6,3]
// atom = [9, 0, 9]; //value is reassigned (create new reference)
// console.log(firestorm); //[3,6,3]
// console.log(atom);

// // refrence in function

// var magneto = [8, 4, 8];
// (function (x) {
//   //IIFE
//   x.push(99);
//   console.log(x); //[8,4,8,99]
//   x = [1, 4, 1]; //reassign variable (create new reference)
//   x.push(88);
//   console.log(x); //[1,4,1,88]
// })(magneto);
// console.log(magneto); //[8,4,8,99]

// // update reference in function

// var wolverine = [8, 7, 8];
// (function (x) {
//   //IIFE
//   x.length = 0; //make empty array object
//   x.push(1, 4, 7, 2);
//   console.log(x); //[1,4,7,2]
// })(wolverine);
// console.log(wolverine); //[1,4,7,2]

// //How to Store a Compound Value through Assign-by-Value

// var cisco = [7, 4, 7];
// var zoom = cisco.slice(); //create shallow copy
// cisco.push(77, 33);
// console.log(zoom); //[7,4,7]
// console.log(cisco); //[7,4,7,77,33]

// //How to Store a Scalar Primitive Value Through Assign-by-Reference?

// var flash = { speed: 88 };
// (function (x) {
//   //IIFE
//   x.speed = 55;
// })(flash);
// console.log(flash.speed); //55

// function test(x) {
//   let a = x.speed + 1;
//   return a;
// }

// console.log(test({ speed: 1 }));
// console.log(test({ speed: 2 }));

// const data = [];
// data[0] = "value1";
// data[1] = "value2";

// console.log(data); //[ 'value1', 'value2' ]

//fibanacci series

// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));
// console.log(fibonacci(20));
// console.log(fibonacci(30));

// const data = [
//   {
//     name: 'John'
//   },
//   {
//     name: 'Mary'
//   },
//   {
//     name: 'Peter'
//   }
// ];

// for (let n in data) {
//   console.log(data[n].name);
// }

// const data = [1, 2, 3, 4, 5];
// //first parameter is the index of the first element to be copied, second parameter is the number of elements to be copied.
// const reOrder1 = data.slice(0, 2);
// console.log(reOrder1); //5
// const reOrder2 = data.slice(2); //copy from index 2 to the end
// const reOrder = [...reOrder2, ...reOrder1];
// console.log(reOrder);

// let obj = {
//   value: null,
//   next: null
// };

// let obj1 = obj;
// obj1.next = 1;
// obj1.value = 1;
// obj1 = {
//   value: 2,
//   next: null
// };
// console.log(obj);
// console.log(obj1);

//sample of assign by reference
// let a = {
//   next: {
//     next: null
//   }
// };

// let copy = a;

// while (copy.next) {
//   copy = copy.next;
// }
// copy.next = {
//   a: 1
// };
// console.log('a', a);
// console.log('copy', copy);

//sample of inserting objects into nested object
let a = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 5,
      next: null
    }
  }
};

let prev = null;
let current = a;
let i = 0;
let index = 0;

if (index <= i) {
  a = {
    value: 2,
    next: null
  };
} else {
  while (current.next && i < index) {
    prev = current;
    current = current.next;
    i++;
  }

  if (current.next) {
    let newValue = {
      value: 2,
      next: null
    };

    prev.next = newValue;
    newValue.next = current;
  }
}

console.log('a', a);

//delete an object at
// let a = {
//   value: 0,
//   next: {
//     value: 1,
//     next: {
//       value: 5,
//       next: null
//     }
//   }
// };

// let prev = null;
// let current = a;
// let i = 0;
// let index = 5;

// if (index === 0) {
//   a = a.next;
// } else {
//   while (current.next && i < index) {
//     prev = current;
//     current = current.next;
//     i++;
//   }

//   if (current.next) {
//     prev.next = current.next;
//   }
// }
// console.log('a', a);
