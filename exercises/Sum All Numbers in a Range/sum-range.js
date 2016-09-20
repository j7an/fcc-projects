/* JavaScript File

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
  let rangeNum = [];
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  
  for (var i = min; i <= max; i++) {
      rangeNum.push(i);
  }

  return rangeNum.reduce(function(prev, curr) {
      return prev + curr;
  });

}
// sumAll([1, 4]);
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
