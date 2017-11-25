// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution #1
const chunk = (array, size) => {
  // start a new parent array
  let newArr = [];
     
  // iterate over each item in the array and 
  // increment the index by the size of each sub-array
  for(let i = 0; i < array.length; i += size) {
    // push a sliced array ranging from the current index 
    // to the index + size(to get items ahead of the current item until the size amount is reached)
    newArr.push(array.slice(i, i + size));
  }
  
  return newArr;
}

module.exports = chunk;

// solution #2
// const chunk = (array, size) => {
//   // start a new parent array
//   let chunked = [];

//   // iterate over every element in the array 
//   for(let element of array) {
//     // create a reference to the most recently added sub-array
//     // in the chunked parent array
//     let last = chunked[chunked.length - 1];

//     // if there are no sub arrays or the most recent sub array is full
//     // then create a new subarray with the current element
//     // and push to the chunked array
//     if(!last || last.length === size) {
//         chunked.push([element]);
//     } else {
//         // if the most recent sub array isn't full, add the current element
//         last.push(element);
//     }

//   }
  
//   return chunked;
// }