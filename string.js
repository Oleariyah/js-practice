// all about string

// convert string to ASCII
var str = "Hello World";
var ascii = str.charCodeAt(0);
console.log(ascii); //72

// convert ASCII to string
var ascii = 72;
var str = String.fromCharCode(ascii);
console.log(str); //H

// convert string to array
var str = "Hello World";
var arr = str.split("");
console.log(arr); //['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// convert array to string
var arr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
var str = arr.join("");
console.log(str); //Hello World

// compare two strings
var str1 = "Hello World";
var str2 = "Hello World";
console.log(str1 === str2); //true

// sort string
var str = "Hello World";
var sorted = str.split("").sort().join("");
console.log(sorted); //'DWOHLRLLHE'

// sort array of strings
var arr = ["Hello", "World"];
var sorted = arr.sort();
console.log(sorted); //['Hello', 'World']

// reverse string
var str = "Hello World";
var reversed = str.split("").reverse().join("");
console.log(reversed); //'dlroW olleH'

// check palindrome
var str = "Hello World";
var reversed = str.split("").reverse().join("");
console.log(reversed === str); //true

// look for the unmatched character
var str = "Hello World";
var unmatched = str.split("").filter(function (char) {
  return str.indexOf(char) === -1;
});
console.log(unmatched); //['W', 'o', 'r', 'l', 'd']

// check if string is empty
var str = "";
console.log(str.length === 0); //true

// convert encrypted string to decrypted string
var str = "Hello World";
var decrypted = str
  .split("")
  .map(function (char) {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  })
  .join("");
console.log(decrypted); //'Ifmmp Xpsme'

// convert decrypted string to encrypted string
var str = "Ifmmp Xpsme";
var encrypted = str
  .split("")
  .map(function (char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  })
  .join("");
console.log(encrypted); //'Hello World'

// convert string to lowercase
var str = "Hello World";
var lowercase = str.toLowerCase();
console.log(lowercase); //'hello world'

// convert string to uppercase
var str = "Hello World";
var uppercase = str.toUpperCase();
console.log(uppercase); //'HELLO WORLD'

// convert string to titlecase
var str = "hello world";
var titlecase = str
  .split("")
  .map(function (char, index) {
    if (index === 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  })
  .join("");
console.log(titlecase); //'Hello World'

// convert string to camelcase
var str = "hello world";
var camelcase = str
  .split(" ")
  .map(function (char, index) {
    if (index === 0) {
      return char.toLowerCase();
    } else {
      return char.charAt(0).toUpperCase() + char.slice(1);
    }
  })
  .join("");
console.log(camelcase); //'helloWorld'

// convert string to kebabcase
var str = "hello world";
var kebabcase = str
  .split("")
  .map(function (char, index) {
    if (index === 0) {
      return char.toLowerCase();
    } else if (char === " ") {
      return "-";
    } else {
      return char;
    }
  })
  .join("");
console.log(kebabcase); //'hello-world'

// convert string to snakecase
var str = "hello world";
var snakecase = str
  .split("")
  .map(function (char, index) {
    if (index === 0) {
      return char.toLowerCase();
    } else if (char === " ") {
      return "_";
    } else {
      return char;
    }
  })
  .join("");
console.log(snakecase); //'hello_world'

// convert string to slug
var str = "hello world";
var slug = str
  .split("")
  .map(function (char, index) {
    if (index === 0) {
      return char.toLowerCase();
    } else if (char === " ") {
      return "-";
    } else {
      return char;
    }
  })
  .join("");
console.log(slug); //'hello-world'

// convert string to sentence case
var str = "hello world";
var sentencecase = str
  .split("")
  .map(function (char, index) {
    if (index === 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  })
  .join("");
console.log(sentencecase); //'Hello World'

// find the longest word in a string
var str = "Hello World";
var longest = str.split(" ").reduce(function (a, b) {
  return a.length > b.length ? a : b;
}, "");
console.log(longest); //'World'

// find the shortest word in a string
var str = "Hello World";
var shortest = str.split(" ").reduce(function (a, b) {
  return a.length < b.length ? a : b;
}, "");
console.log(shortest); //'Hello'

// find the longest word in an array of strings
var arr = ["Hello", "World"];
var longest = arr.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}, "");
console.log(longest); //'World'

// find the shortest word in an array of strings
var arr = ["Hello", "World"];
var shortest = arr.reduce(function (a, b) {
  return a.length < b.length ? a : b;
}, "");
console.log(shortest); //'Hello'

// search for a substring in a string
var str = "Hello World";
var found = str.indexOf("World");
console.log(found); //6

// search a string
var str = "Hello World";
var found = str.search("World");
console.log(found); //6

// match a string
var str = "Hello World";
var found = str.match("World");
console.log(found); //['World']

// replace a string
var str = "Hello World";
var replaced = str.replace("World", "Universe");
console.log(replaced); //'Hello Universe'

// replace all occurrences of a string
var str = "Hello World";
var replaced = str.replace(/World/g, "Universe");
console.log(replaced); //'Hello Universe'

// replace a string with a function
var str = "Hello World";
var replaced = str.replace(/World/g, function (match) {
  return "Universe";
});
console.log(replaced); //'Hello Universe'

//match all occurrences of a string
var str = "Hello World";
var found = str.match(/World/g);
console.log(found); //['World', 'World']

// starts with a string
var str = "Hello World";
var found = str.startsWith("Hello");
console.log(found); //true

// ends with a string
var str = "Hello World";
var found = str.endsWith("World");
console.log(found); //true

// includes a string
var str = "Hello World";
var found = str.includes("World");
console.log(found); //true

//convert to bits
var str = "Hello World";
var bits = str
  .split("")
  .map(function (char) {
    return char.charCodeAt(0).toString(2);
  })
  .join("");
console.log(bits); //'1100001 1011010 1011100 1001000'

//code point at
var str = "Hello World";
var codePoint = str.codePointAt(0);
console.log(codePoint); //72

//locale compare
var str = "Hello World";
var localeCompare = str.localeCompare("Hello World");
console.log(localeCompare); //0
