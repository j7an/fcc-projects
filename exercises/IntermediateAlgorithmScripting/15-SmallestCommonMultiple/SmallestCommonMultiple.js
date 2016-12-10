/* Find the smallest common multiple of the provided parameters that can be
evenly divided by both, as well as by all sequential numbers in the range
between these parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  // find common multiple : create an array between the two values
  // console.log(arr);
  const min = Math.min.apply(this, arr);
  const max = Math.max.apply(this, arr);
  // console.log(min, max);
  // sort from biggest to smallest
  let num = [];
  for (let i = max; i >= min; i -= 1) {
    num.push(i);
  }
  console.log(num);

  // start calculating common multiple from largest values
  // once common multiple is found, try next lower value for same common multiple
  // if not common multiple, start over with next common multiple of top two values
  // if common multiple, try next lower value again and so on

  return arr;
}


smallestCommons([1,5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);
