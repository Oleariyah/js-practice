// // practicing with maps in JavaScript

// const map = new Map();

// // Adding key-value pairs to the map
// map.set("name", "Alice");
// map.set("age", 30);
// map.set("city", "Wonderland");

// // Retrieving values from the map
// console.log(map.get("name")); // Output: Alice
// console.log(map.get("age")); // Output: 30
// console.log(map.get("city")); // Output: Wonderland

// // Checking if a key exists in the map
// console.log(map.has("name")); // Output: true
// console.log(map.has("country")); // Output: false

// // Removing a key-value pair from the map
// map.delete("age");
// console.log(map.get("age")); // Output: undefined

// // Getting the size of the map
// console.log(map.size); // Output: 2

// // Iterating over the map
// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }
// // Output:
// // name: Alice
// // city: Wonderland

// // Clearing the map
// map.clear();
// console.log(map.size); // Output: 0

// // Checking if the map is empty
// console.log(map.size === 0); // Output: true

// // Adding more key-value pairs
// map.set("language", "JavaScript");
// map.set("framework", "React");

// // Displaying the updated map
// console.log(map); // Output: Map(2) { 'language' => 'JavaScript', 'framework' => 'React' }

// // Converting map to an array of entries
// const entriesArray = Array.from(map.entries());
// console.log(entriesArray); // Output: [ [ 'language', 'JavaScript' ], [ 'framework', 'React' ] ]

// // Converting map keys to an array
// const keysArray = Array.from(map.keys());
// console.log(keysArray); // Output: [ 'language', 'framework' ]

// // Converting map values to an array
// const valuesArray = Array.from(map.values());
// console.log(valuesArray); // Output: [ 'JavaScript', 'React' ]
// // Checking if the map is still empty

// //sample map
// // const sampleMap = new Map([
// //   ["fruit", "apple"],
// //   ["vegetable", "carrot"],
// //   ["drink", "water"]
// // ]);

// // // Displaying the sample map
// // console.log(sampleMap); // Output: Map(3) { 'fruit' => 'apple', 'vegetable' => 'carrot', 'drink' => 'water' }

// //sample 2
// const sampleMap2 = new Map([
//   ["brand", ["Toyota", "Honda", "Ford"]],
//   ["model", ["Corolla", "Civic", "Focus"]],
//   ["year", [2020, 2021, 2022]]
// ]);

// // get an object from the map add push new  values to the array
// sampleMap2.get("brand").push("Chevrolet");

// // Displaying the updated map
// console.log(sampleMap2);
// // Output: Map(3) { 'brand' => [ 'Toyota', 'Honda', 'Ford', 'Chevrolet' ], 'model' => [ 'Corolla', 'Civic', 'Focus' ], 'year' => [ 2020, 2021, 2022 ] }

//practicing with maps in JavaScript 2

// let car = new Map([
//   ["brand", "Toyota"],
//   ["model", "Corolla"],
//   ["year", 2020],
//   ["features", ["Air Conditioning", "Navigation System", "Bluetooth"]]
// ]);

// //update the car features
// car.get("features").push("Sunroof");

// //update the brand value
// car.set("brand", "Honda");

//convert to the below object to map object:

// const recipient = {
//   id: Date.now().toString(), // In real app, this would come from the server
//   name: form.values.name,
//   recipientType: form.values.recipientType,
//   email: form.values.email || undefined,
//   address: form.values.street
//     ? {
//         street: form.values.street,
//         city: form.values.city,
//         state: form.values.state,
//         postalCode: form.values.postalCode,
//         country: form.values.country
//       }
//     : undefined
// };

const recipient = new Map([
  ["id", Date.now().toString()], // In real app, this would come from the server
  ["name", "John Doe"],
  ["recipientType", "individual"],
  ["email", "eeee"],
  [
    "address",
    new Map([
      ["street", "123 Main St"],
      ["city", "Springfield"],
      ["state", "IL"],
      ["postalCode", "62701"],
      ["country", "USA"]
    ])
  ]
]);

// remove the id and log the object
recipient.delete("id");
console.log(Object.fromEntries(recipient.entries()));

// can this be sent the backend
// Yes, the Map can be converted to an object using Object.fromEntries
// convert all values in map to object, including the sub map
const recipientObject = Object.fromEntries(recipient.entries());
// convert the address sub map to an object
recipientObject.address = Object.fromEntries(recipientObject.address.entries());
console.log(recipientObject);

//is the below code valid:

// new Map<string, string | object>([
//   ["id", Date.now().toString()],
//   [
//     "address",
//     {
//       street: form.values.street,
//       city: form.values.city,
//       state: form.values.state,
//       postalCode: form.values.postalCode,
//       country: form.values.country
//     }
//   ]

// ]);
// Yes, the code is valid. It creates a new Map with string keys and values that can be either strings or objects.
// The first entry has a string value, and the second entry has an object value, which is allowed in TypeScript.
// However, if you want to ensure that the address is always an object, you might want to use a type guard or validation to ensure that the values are of the expected types.
// This code creates a Map with a string key and values that can be either strings or objects.

//how do I create an interface typescript for a map object

// You can create an interface in TypeScript to define the structure of a Map object. Here's an example:
// interface Recipient {
//   id: string;
//   name: string;
//   recipientType: string;
//   email?: string;
//   address?: {
//     street: string;
//     city: string;
//     state: string;
//     postalCode: string;
//     country: string;
//   };
// }
