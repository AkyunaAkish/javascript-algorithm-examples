// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution #3(recursive)
const steps = (n, row = 0, stair = '') => {
    // base case: if the final row has been reached, return out of the recursive
    // iteration
    if(n === row) {
        return;
    }

    // if the stair string has the maximum amount of characters
    // then call steps again to move onto the next row(the stair 
    // param will be reset to an empty string by default)
    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    } 
    
    // if there aren't enough # symbols add a hash
    if(stair.length <= row){
        stair += '#';
    } else {
        // otherwise add a space to keep the string building to the max length
        stair += ' ';
    }

    return steps(n, row, stair);
}

module.exports = steps;

// solution #1
// const steps = (n) => {
//     for(let i = 1; i <= n; i++) {
//         console.log(`${'#'.repeat(i)}${' '.repeat(n - i)}`);
//     }
// }

// solution #2
// const steps = (n) => {
//     for(let row = 0; row < n; row++) {
//         let stair = '';

//         for(let column = 0; column < n; column++) {
//             if(column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }  
// }