const arrays = [1, 2, 3, 4, 5];
const arrays2 = [...arrays]; // Using spread operator to copy array

const moreArrays = [6, 7, 8, 9, 10];
const morearrays2 = [...moreArrays]; // Using spread operator to copy another array
const combined = [...arrays2, ...morearrays2];

console.log('Combined Arrays:', combined);  

console.log(...arrays, ...moreArrays);