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

// previous of the first object will be null
// Set the previous object to the next of the current object 
// set previous to the above object 

let prev = null;
let current = a;

while (current) {
  let next = current.next;
  current.next = prev;
  prev = current;
  current = next;
}

a = prev;

console.log('a', a);


while(current) {
  let next = current.next;
  current.next = prev;
  prev = current;
  current = next;
}