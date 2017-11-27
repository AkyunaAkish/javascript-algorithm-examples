// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution #3
const vowels = (str) => {
    // g makes sure the regex doesn't 
    // stop at the first match and keeps looking for other matches
    // match will return an array of matches, if no matches are found
    // it will return null
    const matches = str.match(/[aeiou]/gi);
    
    return matches ? matches.length : 0;
}

module.exports = vowels;

// solution #1
// const vowels = (str) => {
//     return str.split('').reduce((count, char) => {
//         const regex = new RegExp('[aeiou]', 'i').test(char);

//         if (regex) count++;

//         return count;
//     }, 0);
// }

// solution #2
// const vowels = (str) => {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) count++;
//     }

//     return count;
// }
