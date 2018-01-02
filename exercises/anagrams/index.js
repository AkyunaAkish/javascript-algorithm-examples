// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution #3
// const anagrams = (strA, strB) => formatStr(strA) === formatStr(strB);

// const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

// module.exports = anagrams;


// solution #1
// const getLetterCount = (chars) => {
//     return chars.reduce((final, char) => {
//         if(!final[char]) {
//             final[char] = 1;
//         } else {
//             final[char] += 1;
//         }

//         return final;
//     }, {});
// }

// const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();

// const anagrams = (stringA, stringB) => {
//     const a = formatStr(stringA);
//     const b = formatStr(stringB);

//     if(a.length !== b.length) return false;

//     const aLetterCount = getLetterCount(a.split(''));
//     const bLetterCount = getLetterCount(b.split(''));

//     if(Object.keys(aLetterCount).length < 1 || Object.keys(bLetterCount).length < 1) return false;

//     let isAMatch = true;

//     for(key in aLetterCount) {
//         if(aLetterCount[key] !== bLetterCount[key]) isAMatch = false;
//     }

//     return isAMatch;
// }

// solution #2
// const anagrams = (strA, strB) => {
//     const aCharMap = buildCharMap(strA);
//     const bCharMap = buildCharMap(strB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//     for(let char in aCharMap) {
//         if(aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// const buildCharMap = (str) => {
//     const charMap = {};
    
//     for(let char of str.replace(/[^\w]/g).toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }