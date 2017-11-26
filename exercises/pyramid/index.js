// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution #4(recursive solution #2)
const pyramid = (n, row = 0, level = '') => {
    // if the final row has been reached, return out of the function
    if(row === n) {
        return;   
    }

    // if your string "level" has reached the maximum number of characters
    // move onto the next row
    if(level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;

    // if our level string is within the range of indexes that should
    // contain hashtags add a # otherwise add a space
    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    
    // if this point has been reached, a new character should be added to the 
    // string and the row should stay the same because the current
    // row isn't finished
    pyramid(n, row, level + add);
}

module.exports = pyramid;

// solution #1
// const pyramid = (n) => {
//     for(let i = 1; i <= n; i++) {
//         let hashAmt = i + i - 1;
//         let spaceAmt = ((n + n - 1) - hashAmt) / 2;

//         console.log(`${' '.repeat(spaceAmt)}${'#'.repeat(hashAmt)}${' '.repeat(spaceAmt)}`);
//     }
// }

// solution #2
// const pyramid = (n) => {
//     // determine the center index of each row 
//     const midpoint = Math.floor((2 * n - 1) / 2);

//     // for each level/row iterate
//     for(let row = 0; row < n; row++) {
//         // create a level string
//         // to accumulate the #s and ' 's within
//         let level = '';
        
//         // for each individual space or hash in each row 
//         // iterate(2 * n - 1 is the maximum and minimum number of characters for a row)
//         for(let column = 0; column < 2 * n - 1; column++) {
//             // check if the current index is within the range of indexes
//             // that are supposed to have # symbols, otherwise add a space
//             if(midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }

// solution #3(recursive)
// const pyramid = (n, count = 1) => {
//     if(count > n) {
//         return;
//     }

//     let hashAmt = count + count - 1;
//     let spaceAmt = ((n + n - 1) - hashAmt) / 2;

//     console.log(`${' '.repeat(spaceAmt)}${'#'.repeat(hashAmt)}${' '.repeat(spaceAmt)}`);
    
//     return pyramid(n, count + 1);
// }