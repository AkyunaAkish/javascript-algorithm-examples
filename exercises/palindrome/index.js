// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #2
const palindrome = (str) => {
    // uses the every array helper to check if
    // every element returns true based on your inner logic
    return str.split('').every((char, i) => {
        // compare the current character to the character at the
        // opposite end of the string by 
        // accessing the split array's index of i -1 
        return char === str.split('')[str.split('').length - i - 1];
    });
}

module.exports = palindrome;

// solution #1
// const palindrome = (str) => str === str.split('').reverse().join('');
