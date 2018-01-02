// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty matrix
  let spiral = [];

  for (let i = 0; i < n; i++) { spiral.push([]); }

  // define the beginning column
  let startingColumn = 0;

  // define the ending column
  let endingColumn = n - 1;

  // define the beginning row
  let startingRow = 0;

  // define the ending row
  let endingRow = n - 1;

  // define count
  let count = 1;

  // create a while loop that will go until the count has been reached or has exceeded the max(n * n)
  while (n * n >= count) {
    console.log('count', count)
    // create a loop to move left to right. startingRow++
    for (let i = startingColumn; i <= endingColumn; i++) {
      spiral[startingRow][i] = count;
      count++;
    }

    startingRow++;

    // create a loop to move top to bottom. endingColumn--
    for (let i = startingRow; i <= endingRow; i++) {
      spiral[i][endingColumn] = count;
      count++;
    }

    endingColumn--;

    // create a loop to move right to left. endingRow--
    for (let i = endingColumn; i >= startingColumn; i--) {
      spiral[endingRow][i] = count;
      count++;
    }

    endingRow--;

    // create a loop to move bottom to top. startingColumn++
    for (let i = endingRow; i >= startingRow; i--) {
      spiral[i][startingColumn] = count;
      count++;
    }

    startingColumn++;

  }

  // return spiral matrix
  return spiral;
}


// function matrix(n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     // Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }

//   return results;
// }

module.exports = matrix;
