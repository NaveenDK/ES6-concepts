//problem: Use arrow function syntax to compute the square of only the positive integers
// (decimal numbers are not integers) in the array realNumberArray and store
//the new array in the variable squaredIntegers.
//3 ways of doing this

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line

//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);
//Method o1

//BEFORE TRYING TO ANSWER THIS QUESTION GOLOOK AT THIS

// const average = euros.reduce((total, amount, index, array) => {
//     total += amount
//     return total/array.length
//   }, 0);

//Working Answer
// let squaredIntegers = realNumberArray.reduce((arr, num) => {
//   if (num % 2 == 0) arr.push(num * num);
//   return arr;
// }, []);

//Similar but not working
// let squaredIntegers = realNumberArray.reduce((arr, num) => {
//   if (num % 2 == 0) return arr.push(num * num);
//   //return arr;
// }, []);
//const squaredIntegers = squareList(realNumberArray);
//console.log(squaredIntegers);
