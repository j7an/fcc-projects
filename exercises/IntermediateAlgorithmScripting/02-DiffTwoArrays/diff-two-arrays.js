/* Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
*/


function diffArray(arr1, arr2) {
  let newArr = [];
  // Same, same; but different.
  // console.log(arr1, arr2);
  newArr = arr1.filter((i) => {
    // console.log(i);
    return arr2.indexOf(i) < 0;
  });

  // console.log(newArr);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));
