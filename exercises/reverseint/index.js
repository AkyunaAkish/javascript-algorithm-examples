// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution # 2
// multiplying by Math.sign causes the number to become a positive or negative version 
// of itself(Math.sign returns -1 for negative and 1 for positive)
const reverseInt = (n) => parseInt(n.toString().split('').reverse().join('')) * Math.sign(n); 

module.exports = reverseInt;

// solution # 1
// function reverseInt(n) {
//     const sign = Math.sign(n) < 0 ? '-' : '';
//     return parseInt(sign + n.toString().split('').reverse().join(''));
// }