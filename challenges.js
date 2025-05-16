function diagonalDifference(arr) {
  // Write your code here
  let first = 0;
  let last = 0;
  let j = 0;
  let k = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    first += arr[j][j];
    last += arr[i][k];
    j++;
    k--;
  }

  return Math.abs(first - last);
}

function checkMagazine(magazine, note) {
  // Write your code here
  let arr1 = magazine;
  let arr2 = note;
  let check = "";

  if (arr1.length < arr2.length) {
    console.log("No");
    return;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      let index = arr1.indexOf(arr2[i]);
      arr1.splice(index, 1);
      check = "Yes";
    } else {
      console.log("No");
      return;
    }
  }
  console.log(check);
}

function twoStrings(s1, s2) {
  // Write your code here
  let arr1 = s1;
  let arr2 = s2;
  let arr = arr2.length > arr1.length ? arr1 : arr2;
  let arr3 = arr2.length > arr1.length ? arr2 : arr1;

  for (let i = 0; i < arr.length; i++) {
    if (arr3.match(arr[i])) {
      return "YES";
    }
  }
  return "NO";
}

function timeConversion(s = "12:05:39PM") {
  // Write your code here
  let arr = s.split(":");
  let hour = "";
  let min = arr[1];
  let sec = arr[2].substr(0, 2);

  if (arr[2].includes("PM")) {
    if (parseInt(arr[0]) < 12) {
      let conversion = parseInt(arr[0]) + 12;
      hour = String(conversion);
    } else if (parseInt(arr[0]) === 12) {
      hour = arr[0];
    }
  } else {
    hour = parseInt(arr[0]) < 12 ? arr[0] : "00";
  }
  console.log(`${hour}:${min}:${sec}`);
  return `${hour}:${min}:${sec}`;
}

timeConversion();

function gradingStudents(grades) {
  // Write your code here
  let final = [];
  for (let n of grades) {
    let lastDigit = Number(String(n).slice(-1));
    if (n === 100 || n === 0) {
      final.push(n);
    } else if (lastDigit <= 5) {
      if (5 - lastDigit < 3 && n + (5 - lastDigit) >= 40) {
        final.push(n + (5 - lastDigit));
      } else {
        final.push(n);
      }
    } else if (10 - lastDigit < 3 && n + (10 - lastDigit) >= 40) {
      final.push(n + (10 - lastDigit));
    } else {
      final.push(n);
    }
  }
  return final;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let totalApple = 0;
  let totalOrange = 0;
  let i = apples.length - 1;
  let k = oranges.length - 1;

  while (i > -1) {
    let d = a + apples[i];
    if (d >= s && d <= t) {
      totalApple++;
    }
    i--;
  }

  while (k > -1) {
    let d = b + oranges[k];
    if (d >= s && d <= t) {
      totalOrange++;
    }
    k--;
  }

  console.log(totalApple);
  console.log(totalOrange);
}

function findHCF(x, y) {
  // If the input numbers are less than 1 return an error message.
  if (x < 1 || y < 1) {
    return "Please enter values greater than zero.";
  }

  // If the input numbers are not integers return an error message.
  if (x !== Math.round(x) || y !== Math.round(y)) {
    return "Please enter whole numbers.";
  }

  // Now apply Euclid's algorithm to the two numbers.
  while (Math.max(x, y) % Math.min(x, y) !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  // When the while loop finishes the minimum of x and y is the HCF.
  return Math.min(x, y);
}

function kangarooCopied(x1, v1, x2, v2) {
  // Write your code here

  if (x1 > x2) {
    if (v1 >= v2) return "NO";
  }

  if (x2 > x1) {
    if (v2 >= v1) return "NO";
  }

  var jump = (x2 - x1) / (v1 - v2);
  return jump % 1 === 0 ? "YES" : "NO";
}

function kangaroo(x1 = 42, v1 = 3, x2 = 94, v2 = 2) {
  // Write your code here

  let d = Math.floor((x2 - x1) / v1); // multipllier

  let multipleOfV1 = x1 + d * v1;
  let multipleOfV2 = x2 + d * v2;

  if (v2 > v1) console.log("NO");
  if (multipleOfV2 < multipleOfV1) console.log("NO");

  let recursion = (val1, val2) => {
    if (val1 < val2) {
      console.log("v1", multipleOfV1);
      console.log("v2", multipleOfV2);
      multipleOfV1 = val1 += v1;
      multipleOfV2 = val2 += v2;
      recursion(multipleOfV1, multipleOfV2);
    }
    return;
  };

  recursion(multipleOfV1, multipleOfV2);

  if (multipleOfV1 === multipleOfV2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

//42 3 94 2

kangaroo();

console.log(4 % 2);

//A Very Big Sum
function aVeryBigSum(ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    if (
      result > Number.MIN_SAFE_INTEGER - 1 &&
      result < Number.MAX_SAFE_INTEGER + 1
    ) {
      result += ar[i];
    }
  }

  return result;
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  const factorial = (int) => {
    const bigInt = BigInt(int);
    return bigInt === 0n ? 1n : bigInt * factorial(bigInt - 1n);
  };
  console.log(factorial(n).toString());
}
