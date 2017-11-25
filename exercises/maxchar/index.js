// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    const strCharCount = str.split('').reduce((countObj, char) => {
        if(countObj[char]) {
            countObj[char] += 1;
        } else {
            countObj[char] = 1;
        }

        return countObj;
    }, {});
    
    let highestKey;
    let highestCount;

    for(let key in strCharCount) {
        if(!highestCount) {
            highestCount = strCharCount[key];
            highestKey = key;
        } else if (strCharCount[key] > highestCount) {
            highestCount = strCharCount[key];
            highestKey = key;
        }
    }

    return highestKey;
}

module.exports = maxChar;
