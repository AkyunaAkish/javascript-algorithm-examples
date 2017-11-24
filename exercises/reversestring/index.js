// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #4
const reverse = (str) => str.split('').reduce((f, l) => l + f, '');

module.exports = reverse;

//solution #1
// const reverse = (str) => str.split('').reverse().join('');

// solution #2
// const reverse = (str) => {
//     let reversed = '';

//     for (let char of str) {
//         // iterates through each character
//         // and appends each character to the front of the string
//         // leaving the characters at the end of the string 
//         // on the front of the string
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// solution #3
// const reverse = (str) => {
//     let reversed = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// solution #4
// const reverse = (str) => {
//     return str.split('').reduce((final, letter) => {
//         final = letter + final;
//         return final;
//     }, '');
// }
