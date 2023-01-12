// Assignment 1

// Write a JS code that counts how many vowels and consonants a string has that a user entered.
// Example : input = "Write a JS code that counts how many vowels and consonants a string has that a user entered"=> output= "This string has 25 vowels and 48 consonants"

function countVowAndCons(str) {
  let vowels = "aeiou";
  let vowelCount = 0;
  let consCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelCount++;
    else if (str[i] !== " ") consCount++;
  }
  return `This string has ${vowelCount} vowels and ${consCount} consonants`;
}
console.log(
  countVowAndCons(
    "Write a JS code that counts how many vowels and consonants a string has that a user entered"
  )
);

// Assignment 2
// Write a JS code to copy all of the contents of obj1 to obj2 by doubling value numbers at below.
// Example : input = constobj1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40} => output = {'Apple': 30, 'Orange': 70, 'Melon': 40, 'Banana': 100, 'Pear': 80}

const obj1 = {
  Apple: 15,
  Orange: 35,
  Melon: 20,
  Banana: 50,
  Pear: 40,
};
let obj2 = { ...obj1 };
let obj2Keys = Object.keys(obj2);
for (let key of obj2Keys) obj2[key] = obj2[key] * 2;
console.log(obj2);

//Assignment 3
// Write a JS code to sort by year (descending) list of used car dictionaries below.
// Example: input = const cars = [  { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' },  { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }] => output = [
//   { make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' },
//   { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },
//   { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },
//   { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' }
//]

let cars = [
  { make: "Ford", model: "F150 XLT", year: 2018, color: "Gray" },
  { make: "Porsche", model: "Cayman GT4", year: 2016, color: "Gold" },
  { make: "Audi", model: "S7 Prestige", year: 2017, color: "Blue" },
  { make: "Mercedes", model: "S550", year: 2019, color: "Black" },
];
console.log(cars.sort((a, b) => b.year - a.year));

// Assignment 4

// To test a code, an object with students, lessons, and exam results of that lesson is needed. Write a JS code to generate the sample object below with random numbers between 35 and 100.
// Example: output=  {'Student-1': {'Lesson-1': 73, 'Lesson-2': 82, 'Lesson-3': 43, 'Lesson-4': 88, 'Lesson-5': 92}, 'Student-2': {'Lesson-1': 36, 'Lesson-2': 99, 'Lesson-3': 56, 'Lesson-4': 56, 'Lesson-5': 96}, 'Student-3': {'Lesson-1': 44, 'Lesson-2': 66, 'Lesson-3': 73, 'Lesson-4': 66, 'Lesson-5': 90}, 'Student-4': {'Lesson-1': 46, 'Lesson-2': 92, 'Lesson-3': 63, 'Lesson-4': 98, 'Lesson-5': 86}, 'Student-5': {'Lesson-1': 37, 'Lesson-2': 75, 'Lesson-3': 76, 'Lesson-4': 89, 'Lesson-5': 52}}

function createObj() {
  let result = {};
  for (let i = 1; i <= 5; i++) {
    result[`Student-${i}`] = {};
    for (let j = 1; j <= 5; j++) {
      result[`Student-${i}`][`Lesson-${j}`] = Math.round(
        Math.random() * 65 + 35
      );
    }
  }
  return result;
}
console.log(createObj());

// Assignment 5

// Write a JavaScript function to check whether an object contains given property
// Example - 1 : input = const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "name"=> output= true
// Example - 2 : input =  const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "score"=> output= false

const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
function check(obj, keyName) {
  return Object.keys(obj).includes(keyName);
}
console.log(check(student, "name"));
console.log(check(student, "score"));
