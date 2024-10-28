// alert("Hello external Js file");

// varialbe
// data types
// output

document.write("Hello world");

// there are 3 ways of declaring a js varialbe

// var, let and const

// var:
// can be initialised, can be reassigned and can be redeclared

// var name;

// initialisation

// name = "godlbess";
// console.log(name);

// var name = "freeman";
// console.log(name);

// reassignment

// var name = "godbless";

// name = "freeman";

// console.log(name);

// redeclaration

// var name = "godbless";

// var name = "freeman";

// console.log(name);

// let and const

// let:

// can be initialised
// can be reassigned
// cannot be redeclared

// initialisation
// let name = "godbless";
// let name;

// name = "godlbess";

// console.log(name);

// reassignment

// let name = "godbless";

// name = "lancelot";

// console.log(name);

// redeclaration

// let name = "godbless";

// let name = "freeman";

// console.log(name);

// const

// cannot be initialzed, cannot be reassigned, cannot be redeclared

// initialisation

// const name = "godbless";

// console.log(name);

// const name;

// reassignment

// const name = "godbless";

// name = "freeman";

// console.log(name);

// redclaration

// const name = "godbless";

// const name = "freeman";

// console.log(name);

// data types

// primitive data types (numbers, strings, boolean, undefined and null)
// reference data types (arrays, objects, functions)

// js uses camel case (iAmABoy)
// pytho and php uses snake casing (i_am_a_boy)

// primitive are assigned directly to memory and they hold single values
// let x = 3;
// let name = "pascal";
// let isMarried = true;

// // reference are used as a resources and they hold multiple values

// let names = ["godbless", "freeman", "pascal", "daniel"]; //multiple values of thesame data type
// let scores = [30, 67, 77, 45, 90]; //multiple values of thesame data type
// let person = {
//   //multiple values of different data type
//   name: "godbless",
//   email: "gb@gmail.com",
//   isMarried: false,
//   age: 75,
//   hobbies: ["reading", "gaming", "coding"],
//   address: {
//     fb: "ejovwogfreeman",
//     twt: "ejovwogfreeman",
//     phone: "08164471007",
//   },
// };

// numbers

// operators

// type operators => this operator is used to check the type of a data

// arithmetic operators (+, -, *, /, %)
// + => addition
// - => subtraction
// * => multiplication
// / => division
// % => modulus (gives the remainder)

// let x = 20;
// let y = 3;

// console.log(x % y);

// string => strings are squence of characters enclosed
// in quotations (could be single or double quotes)

// let name = "godbless";
// let time = "morning";
// name = "pascal";
// time = "evening";

// console.log(name);

// string concatenation
// concatenation=> means to join strings using addition

// let sentence = "Hello everyone, good " + time + " my name is " + name;
// console.log(sentence);

// template literals (backticks);

// let sentence = `Hello everyone, good ${time} my name is ${name}`;
// console.log(sentence);

// string methods

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// let myStr = "paschal";

// myStr = "godbless";

// indexing

// firstIndex = str[0]
// lastIndex = str[str.length-1]

// let char = myStr[myStr.length - 1];

// console.log(myStr[myStr.length - 1]);

// let myStr = "godbless";

// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());

// split => this converts strings to array

// let email = "ejovwogfreeman007@gmail.com";

// let username = email.split("@")[0];

// concat method

// let name = "     godbless    ";
// let name = "godbless";

// let friend = "paschal";

// console.log(name.concat(" good morning, how is your friend ", friend, "?"));

// console.log(name.charAt(0));

// let trimmedName = name.trim();

// console.log(name.repeat(5));
// console.log(name.replace("god", "jesus"));

// let str = "maxwell";

// console.log(str.slice(3, 4));

// slice takes start and end index
// substring and substr takes start and length

// let name = "godbless";

// console.log(name.endsWith("s"));

///string assignments///
// 1) consider the string 'the quick brown fox jumped over the lazy dog';
// write a string method that separates the vowels from the consonants

// 2) consider the string 'the quick brown fox jumped over the lazy dog';
// write a string method that converts this string into 'the-quick-brown-fox-jumped-over-the-lazy-dog'

// 3) write a program that prompts a user to enter any number and returns the
// addition of the digits of the nubmers

// prompt("enter a number");

// string search methods

// let myStr = "ABCDEDDF";

// console.log(myStr.includes("A"));
// console.log(myStr.startsWith("A"));
// console.log(myStr.endsWith("A"));
// console.log(myStr.indexOf("D"));
// console.log(myStr.lastIndexOf("D"));

// let isMarried = false;

// console.log(isMarried);

// let color = "red";

// if (color == "red") {
//   console.log("your color is red");
// } else {
//   console.log("Your color is not red");
// }

// defining or initializing a variable without assigning a value
// let myName;

// console.log(myName);

// null

// let fruitBasket = null;

// console.log(fruitBasket);

// js operators
// 1) arithmetic (+, -, *, /, %, **)
// 2) assignment (=, +=, -=, *=, /=, %=)
// 3) comparism operator (==, !=, ===, !==, >, >=, <, <= )
// 4) Logical Operators (&&, ||, !)
// 5) Ternary Operators
// 6) Type Operators

// let x = 16;

// x /= 8;

// console.log(x);

// console.log(3 == "3"); //true
// console.log(3 != "3"); //false
// console.log(3 == 3); //true
// console.log(3 != 3); //false
// console.log(3 === "3"); //false
// console.log(3 !== "3"); //true
// console.log(3 === 3); //true
// console.log(3 !== 3); //false

// Logical And:
// symbol => &&
// returns true if all are true
// console.log(3 == 3 && 4 === "4");

// Logical Or:
// symbol => ||
// returns true if one of the statement are true
// console.log(3 == 3 || 4 === "4" || 5 == 6);

// Logical Not:
// symbol => !
// its used to negate a statement
// console.log(!(3 == 3 || 4 === "4" || 5 == 6));

// ternary operator
// symbol ? :
// shorthand method of if and else statement

// let color = "red";
// if (color === "red") {
//   console.log("your color is red");
// } else {
//   console.log("your color is not red");
// }

// ternary form of the above if/else statement
// console.log(color === "red" ? "your color is red" : "your color is not red");

// type operator
// it checks the data type of the variable

// console.log(typeof "godbless");
// console.log(typeof 23);
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});

// type conversion
// let myVar = "25";

// console.log(typeof myVar);

// different ways to convert to number

// Number()
// parseInt()
// parseFloat()
// +

// console.log(typeof Number(myVar));
// console.log(typeof parseInt(myVar));
// console.log(typeof parseFloat(myVar));
// console.log(typeof +myVar);

// let myVar = 23;

// console.log(typeof myVar);

// console.log(typeof String(myVar));
// console.log(typeof toString(myVar));

// let isMarried = true;

// console.log(typeof isMarried);

// console.log(typeof String(isMarried));
// console.log(typeof toString(isMarried));

// let myArr = ["1", "2", "3"];

// console.log(myArr);
// console.log(myArr.toString());

// let userInput = prompt("enter any number");
// let userInputArr = userInput.split("");
// let sum = 0;
// for (let i = 0; i <= userInputArr.length; i++) {
//   console.log(sum+=userInputArr);
// }
// console.log(userInputArr);
// alert(userInput);

// let color = "red";
// color = "pink";

// if (color === "red") {
//   console.log("your color is red");
// } else if (color === "blue") {
//   console.log("your is color is blue");
// } else if (color === "green") {
//   console.log("your color is green");
// } else {
//   console.log("not a match");
// }

// ternary operator: a shorhand way of writing if/else statements

// let x = 38;

// if (x > 3) {
//   console.log("x is greater than 3");
// } else {
//   console.log("x is not greater than 3");
// }

// console.log(x > 3 ? "x is greater than 3" : "x is not greater than 3");

// switch statement

// let color = "pink";

// switch (color) {
//   case "red":
//     console.log("your color is red");
//     break;
//   case "blue":
//     console.log("your color is blue");
//     break;
//   case "green":
//     console.log("your color is green");
//     break;
//   default:
//     console.log("not a match");
//     break;
// }

// js loops
// 1) for loop
// 2) while loop
// 3) do while loop

// for loops
// syntax
// for(condition){
//   codeblock;
// }
// or
// for(initializer; boundary; increment){
//   codeblock;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// break and continue in loops

// break: jumps out of a loop
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// continue: jumps and continue the loop
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// even
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// odd numbers
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// while loop
// syntax
// while(condition){
//   codeblock;
//   increment;
// }
// let i = 1;
// while (i < 20) {
//   console.log(i);
//   i++;
// }

// do while loops
// syntax
// do {
//   codelock;
// } while (condition);

// let i = 29;
// do {
//   console.log(i);
//   i++;
// } while (i <= 20);

let names = ["godbless", "freeman", "lancelot"];

// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for in, for of, foreach, map

// for (let i in names) {
//   console.log(names[i]);
// }

// let person = {
//   firstname: "godbless",
//   lastname: "freeman",
//   isAdmin: true,
// };

// // for in iterates over an object
// for (let i in person) {
//   console.log(i);
// }

// // for of iterate of ver strings
// let str = "abcdef";

// for (let i of str) {
//   console.log(i);
// }

// names.forEach((name) => {
//   console.log(name);
// });

// names.forEach((name, i) => {
//   console.log(i + 1 + " - " + name);
// });

// names.map((name) => {
//   console.log(name);
// });

// names.map((name, i) => {
//   console.log(i + 1 + " - " + name);
// });

// functions
// syntax
// function functionName(){
//     codeblock
// }
// or
// function functionName(param){
//     codeblock
// }

// function greet() {
//   return "Hello world";
// }

// console.log(greet());

// NB: return keyword in functions
// do do main things
// 1) it stores the returned value in memory of the function
// 2) it stops or blocks the code from running

// create a function that takes a name and greet hello the name;

// function greet(name) {
//   return "Hello " + name;
// }

// console.log(greet("paschal"));

// alert("please enter your name");
// let username = prompt("Enter your username");
// alert("Hello " + username);

// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("freeman"));

// function greet(name, time) {
//   return "Hello " + name + ", good " + time;
// }
// console.log(greet("freeman", "morning"));
// console.log(greet("paschal", "afternoon"));

// function to calc area of cirlce

// function calcArea(radius) {
//   let pi = 3.142;
//   let area = pi * radius ** 2;
//   return "The area of a circle with radius of " + radius + " is " + area;
// }

// console.log(calcArea(7));

// // assignemt
// 1) write a function that converts naria to dollar (usin 1 dollar to 1600 naira)
// 2) write a function that converts temperature in kelvin to celcius
// 3) write a function that uses the almighty formula to solve quadratic equation
