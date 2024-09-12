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

// let x = 16;

// x /= 8;

// console.log(x);

console.log(3 == "3"); //true
console.log(3 != "3"); //false
console.log(3 == 3); //true
console.log(3 != 3); //false
console.log(3 === "3"); //false
console.log(3 !== "3"); //true
console.log(3 === 3); //true
console.log(3 !== 3); //false
