import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// function square(x) {
//   return x * x;
// }

// let result = square(9);
// console.log(result);

const newNumbers = numbers.map((x) => x * x);

console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const double = numbers.map(function (x) {
//   return x * 2;
// });

const double = numbers.map((x) => x * 2);

console.log(double);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const lessthanten = numbers.filter((num) => num < 10);

console.log(lessthanten);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

const addtwonumbers = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

console.log(addtwonumbers);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const greaterthanten = numbers.find((num) => num > 10);

console.log(greaterthanten);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const indexofgreaterthanten = numbers.findIndex((num) => num > 10);

console.log(indexofgreaterthanten);
