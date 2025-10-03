// function diagonalDifference(arr) {
//   // Write your code here
//   let first = 0;
//   let last = 0;
//   let j = 0;
//   let k = arr.length - 1;

//   for (let i = 0; i < arr.length; i++) {
//     first += arr[j][j];
//     last += arr[i][k];
//     j++;
//     k--;
//   }

//   return Math.abs(first - last);
// }

// function checkMagazine(magazine, note) {
//   // Write your code here
//   let arr1 = magazine;
//   let arr2 = note;
//   let check = "";

//   if (arr1.length < arr2.length) {
//     console.log("No");
//     return;
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       let index = arr1.indexOf(arr2[i]);
//       arr1.splice(index, 1);
//       check = "Yes";
//     } else {
//       console.log("No");
//       return;
//     }
//   }
//   console.log(check);
// }

// function twoStrings(s1, s2) {
//   // Write your code here
//   let arr1 = s1;
//   let arr2 = s2;
//   let arr = arr2.length > arr1.length ? arr1 : arr2;
//   let arr3 = arr2.length > arr1.length ? arr2 : arr1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr3.match(arr[i])) {
//       return "YES";
//     }
//   }
//   return "NO";
// }

// function timeConversion(s = "12:05:39PM") {
//   // Write your code here
//   let arr = s.split(":");
//   let hour = "";
//   let min = arr[1];
//   let sec = arr[2].substr(0, 2);

//   if (arr[2].includes("PM")) {
//     if (parseInt(arr[0]) < 12) {
//       let conversion = parseInt(arr[0]) + 12;
//       hour = String(conversion);
//     } else if (parseInt(arr[0]) === 12) {
//       hour = arr[0];
//     }
//   } else {
//     hour = parseInt(arr[0]) < 12 ? arr[0] : "00";
//   }
//   console.log(`${hour}:${min}:${sec}`);
//   return `${hour}:${min}:${sec}`;
// }

// timeConversion();

// function gradingStudents(grades) {
//   // Write your code here
//   let final = [];
//   for (let n of grades) {
//     let lastDigit = Number(String(n).slice(-1));
//     if (n === 100 || n === 0) {
//       final.push(n);
//     } else if (lastDigit <= 5) {
//       if (5 - lastDigit < 3 && n + (5 - lastDigit) >= 40) {
//         final.push(n + (5 - lastDigit));
//       } else {
//         final.push(n);
//       }
//     } else if (10 - lastDigit < 3 && n + (10 - lastDigit) >= 40) {
//       final.push(n + (10 - lastDigit));
//     } else {
//       final.push(n);
//     }
//   }
//   return final;
// }

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let totalApple = 0;
//   let totalOrange = 0;
//   let i = apples.length - 1;
//   let k = oranges.length - 1;

//   while (i > -1) {
//     let d = a + apples[i];
//     if (d >= s && d <= t) {
//       totalApple++;
//     }
//     i--;
//   }

//   while (k > -1) {
//     let d = b + oranges[k];
//     if (d >= s && d <= t) {
//       totalOrange++;
//     }
//     k--;
//   }

//   console.log(totalApple);
//   console.log(totalOrange);
// }

// function findHCF(x, y) {
//   // If the input numbers are less than 1 return an error message.
//   if (x < 1 || y < 1) {
//     return "Please enter values greater than zero.";
//   }

//   // If the input numbers are not integers return an error message.
//   if (x !== Math.round(x) || y !== Math.round(y)) {
//     return "Please enter whole numbers.";
//   }

//   // Now apply Euclid's algorithm to the two numbers.
//   while (Math.max(x, y) % Math.min(x, y) !== 0) {
//     if (x > y) {
//       x %= y;
//     } else {
//       y %= x;
//     }
//   }

//   // When the while loop finishes the minimum of x and y is the HCF.
//   return Math.min(x, y);
// }

// function kangarooCopied(x1, v1, x2, v2) {
//   // Write your code here

//   if (x1 > x2) {
//     if (v1 >= v2) return "NO";
//   }

//   if (x2 > x1) {
//     if (v2 >= v1) return "NO";
//   }

//   var jump = (x2 - x1) / (v1 - v2);
//   return jump % 1 === 0 ? "YES" : "NO";
// }

// function kangaroo(x1 = 42, v1 = 3, x2 = 94, v2 = 2) {
//   // Write your code here

//   let d = Math.floor((x2 - x1) / v1); // multipllier

//   let multipleOfV1 = x1 + d * v1;
//   let multipleOfV2 = x2 + d * v2;

//   if (v2 > v1) console.log("NO");
//   if (multipleOfV2 < multipleOfV1) console.log("NO");

//   let recursion = (val1, val2) => {
//     if (val1 < val2) {
//       console.log("v1", multipleOfV1);
//       console.log("v2", multipleOfV2);
//       multipleOfV1 = val1 += v1;
//       multipleOfV2 = val2 += v2;
//       recursion(multipleOfV1, multipleOfV2);
//     }
//     return;
//   };

//   recursion(multipleOfV1, multipleOfV2);

//   if (multipleOfV1 === multipleOfV2) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// //42 3 94 2

// kangaroo();

// console.log(4 % 2);

// //A Very Big Sum
// function aVeryBigSum(ar) {
//   // Write your code here
//   let result = 0;
//   for (let i = 0; i < ar.length; i++) {
//     if (
//       result > Number.MIN_SAFE_INTEGER - 1 &&
//       result < Number.MAX_SAFE_INTEGER + 1
//     ) {
//       result += ar[i];
//     }
//   }

//   return result;
// }

// /*
//  * Complete the 'extraLongFactorials' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */

// function extraLongFactorials(n) {
//   const factorial = (int) => {
//     const bigInt = BigInt(int);
//     return bigInt === 0n ? 1n : bigInt * factorial(bigInt - 1n);
//   };
//   console.log(factorial(n).toString());
// }

// function generateRandomString(options) {
//     const {
//       length,
//       includeLowercase,
//       includeUppercase,
//       includeNumbers,
//       includeSymbols,
//       customCharset
//     } = options;
//     if (length <= 0 || !length) {
//       return '';
//     }
//     let lowercaseLetters = 'abcefghijklmnopgrstuvwxyz';
//     let uppercaseLetters = lowercaseLetters.toUpperCase();
//     let numbers = '0123456789';
//     let symbols = '!@#$%^&*()-_=+[]{}|;:,.<>/?';

//     let characterSetArray = [];
//     includeLowercase && characterSetArray.push(lowercaseLetters);
//     includeUppercase && characterSetArray.push(uppercaseLetters);
//     includeNumbers && characterSetArray.push(numbers);
//     includeSymbols && characterSetArray.push(symbols);

//     let randomString = '';
//     let i = length;
//     let k = characterSetArray.length;
//     let charPool = '';
//     charPool = characterSetArray.join('');

//     while (i > 0) {
//       if (customCharset) {
//         let randomIndex = Math.floor(Math.random() * customCharset.length);
//         randomString += customCharset[randomIndex];
//       } else if (k > 0) {
//         let randomIndex = Math.floor(
//           Math.random() * characterSetArray[k - 1].length
//         );
//         randomString += characterSetArray[k - 1][randomIndex];
//       } else {
//         let randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
//         randomString += lowercaseLetters[randomIndex];
//       }
//       i--;
//       if (k === 1) {
//         k = characterSetArray.length;
//       }
//       k--;
//     }
//     return randomString;
//   }

//   console.log(
//     generateRandomString({
//       length: 100,
//       includeLowercase: true,
//       includeUppercase: true,
//       includeNumbers: true,
//       includeSymbols: true
//     })
//   );

// function groupAnagramsWithoutMap(words) {
//   if (!words || words.length === 0) {
//     return [];
//   }

//   // Use a plain JavaScript object to store groups.
//   // Keys: sorted word string, Values: array of original words
//   const anagramGroups = {}; // Changed from new Map() to {}

//   for (const word of words) {
//     // 1. Normalize and Sort to create the canonical key
//     const canonicalKey = word
//       .toLowerCase() // Case-insensitivity
//       .split('') // Convert string to array of characters
//       .sort() // Sort characters alphabetically
//       .join(''); // Join back to a string

//     // 2. Group words based on the canonical key
//     // Using object property access instead of Map methods
//     if (anagramGroups[canonicalKey]) {
//       // If a group for this key already exists, add the current word to it
//       anagramGroups[canonicalKey].push(word);
//     } else {
//       // If no group exists, create a new one with the current word
//       anagramGroups[canonicalKey] = [word];
//     }
//   }

//   // 3. Extract all the grouped arrays (the values from the object)
//   // Use Object.values() to get an array of all the group arrays
//   return Object.values(anagramGroups); // Changed from Array.from(Map.values())
// }

// // --- Test Cases (same as before to verify functionality) ---
// console.log('--- Anagram Grouper Tests (Without Map) ---');

// const words1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bag'];
// console.log('Words 1:', words1);
// console.log('Grouped 1:', groupAnagramsWithoutMap(words1));

// const words2 = ['Race', 'care', 'Car', 'arc'];
// console.log('\nWords 2:', words2);
// console.log('Grouped 2:', groupAnagramsWithoutMap(words2));

// const words3 = ['cat', 'dog', 'bird'];
// console.log('\nWords 3:', words3);
// console.log('Grouped 3:', groupAnagramsWithoutMap(words3));

// const words4 = [];
// console.log('\nWords 4 (empty):', words4);
// console.log('Grouped 4:', groupAnagramsWithoutMap(words4));

// const words5 = ['hello'];
// console.log('\nWords 5 (single):', words5);
// console.log('Grouped 5:', groupAnagramsWithoutMap(words5));

// const words6 = ['listen', 'silent', 'enlist', 'banana', 'nanaba'];
// console.log('\nWords 6:', words6);
// console.log('Grouped 6:', groupAnagramsWithoutMap(words6));

// function characterFrequency(str) {
//   if (!str || str.length === 0) {
//     // Check for empty string correctly
//     return {};
//   }

//   const result = {}; // This will store the final counts { 'char': count }
//   const caseMap = new Map(); // Maps lowercase_char -> first_appearance_char

//   // Iterate through each character of the string
//   for (const char of str) {
//     // 1. Filter for English letters
//     // Check if the character is an English letter (A-Z or a-z)
//     if (!/[a-zA-Z]/.test(char)) {
//       continue; // Skip non-alphabetic characters
//     }

//     const lowerChar = char.toLowerCase(); // Get the lowercase version for consistent lookup

//     let outputKey; // This will be the key used in the 'result' object

//     // 2. Determine the correct casing for the output key
//     if (caseMap.has(lowerChar)) {
//       // If we've seen this letter (case-insensitively) before,
//       // use the casing we already decided on for the output key.
//       outputKey = caseMap.get(lowerChar);
//       console.log(outputKey);
//     } else {
//       // This is the FIRST time we've encountered this letter (case-insensitively).
//       // So, the current character's casing is the "first appearance" casing.
//       caseMap.set(lowerChar, char); // Store this casing for future reference
//       outputKey = char; // Use the current character's casing as the output key
//       result[outputKey] = 0; // Initialize count for this new key
//     }

//     // 3. Increment the count for the determined output key
//     result[outputKey]++;
//   }

//   return result;
// }

// // --- Test Cases ---
// console.log('--- Character Frequency Tests ---');

// // Example 1: Basic
// console.log('hello:', characterFrequency('hello'));
// // Expected Output: { h: 1, e: 1, l: 2, o: 1 }

// // Example 2: Case-Insensitive with First Appearance Casing
// console.log('Hello World:', characterFrequency('Hello World'));
// // Expected Output: { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 }
// // (Order of keys might vary in plain objects, but the counts should be correct)

// // Example 3: Mixed Case with Different First Appearance
// console.log('aAbbCcDD:', characterFrequency('aAbbCcDD'));
// // Expected Output: { a: 2, b: 2, C: 2, D: 2 }
// // (Order of keys might vary in plain objects, but the counts should be correct)

// // Example 4: Non-alphabetic characters
// console.log(
//   'Th!s is a t3st strinG.:',
//   characterFrequency('Th!s is a t3st strinG.')
// );
// // Expected Output: { T: 2, h: 1, i: 2, s: 3, a: 1, t: 2, r: 1, n: 1, g: 1 }

// // Example 5: Empty string
// console.log('Empty string:', characterFrequency(''));
// // Expected Output: {}

// // Example 6: String with only non-alphabetic chars
// console.log('123!@#$:', characterFrequency('123!@#$'));
// // Expected Output: {}

// const checkContinue = (arr = [1, "2", "3", 4]) => {
//   let str = "";

//   for (const a of arr) {
//     if (typeof a === "number") {
//       continue;
//     }
//     str += a;
//   }
//   console.log(str);
// };

// checkContinue();

//learn Map

function groupAnagrams(words) {
  if (!words || words.length === 0) {
    return [];
  }

  // Use a Map to store groups of anagrams
  const anagramGroups = new Map();

  for (const word of words) {
    // Normalize and Sort to create the canonical key
    const canonicalKey = word
      .toLowerCase() // Case-insensitivity
      .split("") // Convert string to array of characters
      .sort() // Sort characters alphabetically
      .join(""); // Join back to a string

    // Group words based on the canonical key
    if (anagramGroups.has(canonicalKey)) {
      // If a group for this key already exists, add the current word to it
      anagramGroups.get(canonicalKey).push(word);
      console.log(anagramGroups);
    } else {
      // If no group exists, create a new one with the current word
      anagramGroups.set(canonicalKey, [word]);
    }
  }

  // Extract all the grouped arrays (the values from the Map)
  return Array.from(anagramGroups.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bag"]);
