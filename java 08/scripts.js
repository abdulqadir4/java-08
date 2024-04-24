// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
let multiDimArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 3. Write a program to print numeric counting from 1 to 10.
let count = "";
for (let i = 1; i <= 10; i++) {
  count += i + " ";
}
document.getElementById("output").innerHTML += "<p>Numeric counting from 1 to 10: " + count + "</p>";

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));
let multiplicationTable = "";
for (let i = 1; i <= tableLength; i++) {
  multiplicationTable += tableNumber + " * " + i + " = " + (tableNumber * i) + "<br>";
}
document.getElementById("output").innerHTML += "<h3>Multiplication Table of " + tableNumber + "</h3>";
document.getElementById("output").innerHTML += multiplicationTable;

// 5. Write a program to print items of the following array using for loop:
let arrayToPrint = ["apple", "banana", "cherry"];
let items = "";
for (let i = 0; i < arrayToPrint.length; i++) {
  items += arrayToPrint[i] + "<br>";
}
document.getElementById("output").innerHTML += "<h3>Items of the array:</h3>";
document.getElementById("output").innerHTML += items;

// 6. Generate the following series in your browser.
let series = "";
for (let i = 1; i <= 10; i++) {
  series += i * 2 + " ";
}
document.getElementById("output").innerHTML += "<h3>Generated series:</h3>";
document.getElementById("output").innerHTML += series;

// 7. You have an array. Write a program to enable “search by user input” in an array.
let searchArray = [1, 2, 3, 4, 5];
let userInput = parseInt(prompt("Enter a number to search in the array:"));
let found = false;
for (let i = 0; i < searchArray.length; i++) {
  if (searchArray[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  document.getElementById("output").innerHTML += "<p>" + userInput + " found in the array.</p>";
} else {
  document.getElementById("output").innerHTML += "<p>" + userInput + " not found in the array.</p>";
}

// 8. Write a program to identify the largest number in the given array.
let numbersArray = [10, 5, 20, 8, 15];
let largestNumber = Math.max(...numbersArray);
document.getElementById("output").innerHTML += "<p>Largest number in the array: " + largestNumber + "</p>";

// 9. Write a program to identify the smallest number in the given array.
let smallestNumber = Math.min(...numbersArray);
document.getElementById("output").innerHTML += "<p>Smallest number in the array: " + smallestNumber + "</p>";

// 10. Write a program to print multiples of 5 ranging 1 to 100.
let multiplesOf5 = "";
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    multiplesOf5 += i + " ";
  }
}
document.getElementById("output").innerHTML += "<p>Multiples of 5 ranging from 1 to 100: " + multiplesOf5 + "</p>";
