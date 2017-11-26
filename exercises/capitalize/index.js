// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution #2(not as good)
const capitalize = (str) => {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;

// solution #1
// const capitalize = (str) => {
//     return str.split(' ').map((word) => {
//         // can also user word.slice(1) instead of substring(1)
//         return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
//     }).join(' ');
// }