// JavaScript File


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  // console.log(arr1, arr2);
  newArr = arr1.filter(function (i) {
    // console.log(i);
    return arr2.indexOf(i) < 0;
  });
  
  // console.log(newArr);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));

