/*
This problem was asked by Amazon.

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops.
*/

const numDigits = (number) => (number ? Math.floor(Math.log10(number)) + 1 : 1);

console.assert(numDigits(0) === 1, "numDigits(0) is 1.");
console.assert(numDigits(9) === 1, "numDigits(9) is 1.");
console.assert(numDigits(10) === 2, "numDigits(10) is 2.");
console.assert(numDigits(99) === 2, "numDigits(99) is 2.");
