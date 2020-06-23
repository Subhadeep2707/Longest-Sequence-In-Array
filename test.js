const longestSequence = require('./longestSequence.js');

const tests = [
 { randomNum: [], maxSequence: 0 },
 { randomNum: [-3, 9, 8], maxSequence: 2 },
 { randomNum: [2, 5, 6, 1, 8, 3, 10, 4], maxSequence: 6 },
 { randomNum: [2, 3, 5, 1, 7, 4], maxSequence: 5 },
 { randomNum: [-8, -5, -1, 0, -7, -6, 4], maxSequence: 4 },
 { randomNum: [-5, -5, -1, -4, 0, 1, -3, -2], maxSequence: 7 },
 { randomNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], maxSequence: 10 },
 { randomNum: [4, 3, 1, -1, 0, 2, 7], maxSequence: 4 },  // Wrong test case
 { randomNum: [1, 5, 6, 1, 1, 3, 9, 0, -1], maxSequence: 8 },  // Wrong test case
];

let { randomNum: numArr, maxSequence: result } = { randomNum: 0, maxSequence: 0 };
tests.forEach(test => {
 ({ randomNum: numArr, maxSequence: result } = test);
 console.log('Input: ' + numArr + ' | Output: ' + result +' ------> ', isEqual(longestSequence(numArr), result));
})

function isEqual(a, b) {
 if (a === b){
  return true;
 }else{
  return `Expected: ${b} Got: ${a}, ${a===b}`;
 }
} 
