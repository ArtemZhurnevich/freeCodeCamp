// Setup
var a;
a = 7;
// Only change code below this line


// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this liney7


// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";


const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// Change this line


const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line


const myStr = "This is the start." + " This is the end."; // Change this line


let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";


// Only change code below this line
const myName = "Artem";
const myStr = "My name is" + myName + "and I am well!";


// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


// Only change code below this line
const myArray = ["peanut butter", 4];


// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];


// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line


// Setup
const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop();
// Only change code below this line


// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line


const myList = [
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
];


function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();


function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2);


function timesFive(num) {
    return num * 5;
}
const answer = timesFive(5);


function myLocalScope() {
    // Only change code below this line
    let myVar = 14;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);


  // Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}
myOutfit();


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


// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// Only change code below this line


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


  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line
  }


  // Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);


// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);


// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");


// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);


// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10);


  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  testGreaterThan(10);


  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >=10) {  // Change this line
      return "10 or Over";
    }
      return "Less than 10";
  }
  testGreaterOrEqual(10);


  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
    return "55 or Over";
  }
  testLessThan(10);


  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  testLessOrEqual(10);


function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      
        return "Yes";
      
    }
    // Only change code above this line
    return "No";
  }
testLogicalAnd(10);


function testLogicalOr(val) {
    // Only change code below this line
  
    if (val > 20 || val < 10) {
      return "Outside";
    }
      // Only change code above this line
    return "Inside";
  }
  testLogicalOr(15);


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


  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else  if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  testElseIf(7);


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


  function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return 'Tiny'
  } else if (num < 10) {
    return 'Small'
  } else if (num < 15) {
    return 'Medium'
  } else if (num < 20) {
    return 'Large'
  } else if (num >= 20) {
    return 'Huge'
  } else {
     return "Change Me";
  }
    // Only change code above this line
  }
  testSize(7);


  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
    // Only change code below this line
  if (strokes == 1){
    return names[0]
  } else if (strokes <= par - 2 ){
    return names[1]
  } else if (strokes == par - 1 ){
    return names[2]
  }else if (strokes == par){
    return names[3]
  }else if (strokes == par + 1){
    return names[4]
  }else if (strokes == par + 2){
    return names[5]
  }else if (strokes >= par + 3){
    return names[6]
  } else {
    return "Change Me";
  }  
    // Only change code above this line
  }
  golfScore(5, 4);
  
  
  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
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


  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }
    // Only change code above this line
    return answer;
  }
  switchOfStuff(1);


  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val) {
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
  }
    // Only change code above this line
    return answer;
  }
  sequentialSizes(1);


  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
  case 'bob':
    answer="Marley";
    break;
  case 42:
    answer="The Answer";
    break;
  case 1:
    answer="There is no #1";
    break;
  case 99:
    answer="Missed me by this much!";
    break;
  case 7:
    answer="Ate Nine";
    break;
  }
    // Only change code above this line
    return answer;
  }
  chainToSwitch(7);
  
  
  function isLess(a, b) {
    // Only change code below this line
       return a < b;
    
    // Only change code above this line
  }
  isLess(10, 15);


  // Setup
function abTest(a, b) {
    // Only change code below this line
  if (a < 0 || b < 0){
    return undefined;
  }
    // Only change code above this line
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,2);


  let count = 0;
  function cc(card) {
    // Only change code below this line
  switch (card) {
    case 2: 
    case 3: 
    case 4: 
    case 5:
    case 6:
      count += 1;
      break;
    case 7: 
    case 8:
    case 9:
      count = count;
      break;
    case 10: 
    case "J":
    case "Q":
    case "K":
    case "A":
    count -= 1;
      break;
  }
  let result = "";
  if (count <= 0) {
    result = " Hold";
  } else if (count > 0) {
    result = " Bet"
  }
    return count + result;
    // Only change code above this line
  }
  cc(2); cc(3); cc(7); cc('K'); cc('A');


  const myDog = {
    // Only change code below this line
  'name': 'artik', 
  legs: 4,
  tails: 2,
  friends: ['wer', 'per', 'perlamutr'],
    // Only change code above this line
  };


  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line


 // Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
  
  
  // Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line


  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "woff";


// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
// Only change code below this line


// Setup
function phoneticLookup(val) {
  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  let result = lookup[val];
  // Only change code above this line
  return result;
};
phoneticLookup("alpha");
// phoneticLookup("bravo");
// phoneticLookup("charlie");
// phoneticLookup("delta");
// phoneticLookup("echo");
// phoneticLookup("foxtrot");


function checkObj(obj, checkProp) {
  // Only change code below this line
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
  

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];


const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value != '') {
    records.id.prop = value;
  } else if (prop === 'tracks' && id.tracks == undefined) {
    records.id.tracks = ['1999', 'Little Red Corvette']
  } else if (prop === 'tracks' && value != '') {
    records.id.tracks.push(value)
  } else if (value == '') {
    delete id.prop;
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');


















