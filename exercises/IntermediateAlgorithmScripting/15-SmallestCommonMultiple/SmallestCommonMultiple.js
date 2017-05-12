/* Find the smallest common multiple of the provided parameters that can be
evenly divided by both, as well as by all sequential numbers in the range
between these parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {

  // sort initial array from biggest to smallest
  arr.sort(function(a, b) {
    return b - a; // descending order
  })
  console.log(arr);

  // fill in missing numbers between the two initial values in arr
  let newArr = [];
  for (let n = arr[0]; n >= arr[1]; n--) {
    newArr.push(n);
  }
  console.log(newArr);

  let lcm = 0; // lowest common multiple
  let loop = 1;
  let n; // array index

  while (n !== newArr.length) {
    lcm = newArr[0] * loop * newArr[1];

    for (n = 2; n < newArr.length; n++) {
      if (lcm % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  }
  console.log(lcm);

  return lcm;
}

smallestCommons([1,5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);
