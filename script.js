/* Assigning the Value of One Variable to Another */

var a;
a = 7;
var b;
b = a;

/* Initializing Variables with the Assignment Operator */

var a = 9;

/* Declare String Variables */

var myFirstName = "Igor";
var myLastName = "Minaev";

/* Understanding Uninitialized Variables */

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/* Understanding Case Sensitivity in Variables */

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* Explore Differences Between the var and let Keywords */

let camper = "James";
let camper = "David";

/* Declare a Read-Only Variable with the const Keyword */

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/* Add Two Numbers with JavaScript */

const sum = 10 + 10;

/* Subtract One Number from Another with JavaScript */

const difference = 45 - 33;

/* Multiply Two Numbers with JavaScript */

const product = 8 * 10;

/* Divide One Number by Another with JavaScript */

const quotient = 66 / 33;

/* Increment a Number with JavaScript */

let myVar = 87;

// Only change code below this line
myVar++;

/* Decrement a Number with JavaScript */

let myVar = 11;

// Only change code below this line
myVar--;

/* Create Decimal Numbers with JavaScript */

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.7;

/* Multiply Two Decimals with JavaScript */

const product = 2.0 * 2.5;

/* Divide One Decimal by Another with JavaScript */

const quotient = 4.4 / 2.0; // Change this line

/* Finding a Remainder in JavaScript */

const remainder = 11 % 3;

/* Compound Assignment With Augmented Addition */

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/* Compound Assignment With Augmented Subtraction */

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

/* Compound Assignment With Augmented Multiplication */

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

/* Compound Assignment With Augmented Division */

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/* Escaping Literal Quotes in Strings */

const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

/* Quoting Strings with Single Quotes */

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* Escape Sequences in Strings */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/* Concatenating Strings with Plus Operator */

const myStr = "This is the start. " + "This is the end."; // Change this line

/* Concatenating Strings with the Plus Equals Operator */

let myStr;
myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/* Constructing Strings with Variables */

// Only change code below this line
const myName = "Igor";
const myStr = "My name is " + myName + " and I am well!";

/* Appending Variables to Strings */

// Change code below this line
const someAdjective = "very interesting thing!";
let myStr = "Learning to code is ";
myStr += someAdjective;

/* Find the Length of a String */

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/* Use Bracket Notation to Find the First Character in a String */

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

/* Understand String Immutability */

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/* Use Bracket Notation to Find the Nth Character in a String */

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

/* Use Bracket Notation to Find the Last Character in a String */

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

/* Use Bracket Notation to Find the Nth-to-Last Character in a String */

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

/* Word Blanks */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =
  "I " +
  myVerb +
  " very " +
  myAdverb +
  " when I saw a " +
  myAdjective +
  " angry " +
  myNoun; // Change this line
// Only change code above this line

/* Store Multiple Values in one Variable using JavaScript Arrays */

// Only change code below this line
const myArray = ["name", 3, "age", 66];

/* Nest one Array within Another Array */

// Only change code below this line
const myArray = [
  ["Igor", 29],
  ["Alex", 34],
];

/* Access Array Data with Indexes */

const myArray = [50, 60, 70];
const myData = myArray[0];

/* Modify Array Data With Indexes */

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

/* Access Multi-Dimensional Arrays With Indexes */

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
/* 
Manipulate Arrays With push() */

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
myArray.push(["dog", 3]);

/* Manipulate Arrays With pop() */

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();

/* Manipulate Arrays With shift() */

// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
const removedFromMyArray = myArray.shift();

/* Manipulate Arrays With unshift() */

// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

/* Shopping List */

const myList = [
  ["Milk", 1],
  ["Bread", 2],
  ["Butter", 1],
  ["Tomato", 5],
  ["Cucumber", 3],
];

/* Write Reusable JavaScript with Functions */

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

/* Passing Values to Functions with Arguments */

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}

functionWithArgs(7, 9);

/* Return a Value from a Function with Return */

function timesFive(num) {
  return num * 5;
}

timesFive(5);

/* Global Scope and Functions */

// Declare the myGlobal variable below this line

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
let myGlobal = 10;
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* Local Scope and Functions */

function myLocalScope() {
  // Only change code below this line
  let myVar = 10;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

/* Global vs. Local Scope in Functions */

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

/* Understanding Undefined Value returned from a Function */

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

/* Assignment with a Returned Value */

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

/* Stand in Line */

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr.shift();
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* Understanding Boolean Values */

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

/* Use Conditional Logic with If Statements */

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line
}

/* Comparison with the Equality Operator */

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/* Comparison with the Strict Equality Operator */

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/* Practice comparing different values */

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/* Comparison with the Inequality Operator */

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/* Comparison with the Strict Inequality Operator */

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/* Comparison with the Strict Inequality Operator */

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/* Comparison with the Greater Than Or Equal To Operator */

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/* Comparison with the Less Than Operator */

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

/* Comparison with the Less Than Or Equal To Operator */

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/* Comparisons with the Logical And Operator */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/* Comparisons with the Logical Or Operator */

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

/* Introducing Else Statements */

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

/* Introducing Else If Statements */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

/* Logical Order in If Else Statements */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/* Chaining If Else Statements */

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  // Only change code above this line
}

testSize(7);

/* Golf Code */

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

  // Only change code above this line
}

golfScore(5, 4);

/* Selecting from Many Options with Switch Statements */

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/* Adding a Default Option in Switch Statements */

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/* Multiple Identical Options in Switch Statements */

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/* Replacing If Else Chains with Switch */

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

/* Returning Boolean Values from Functions */

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);
