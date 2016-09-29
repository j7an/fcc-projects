/* JavaScript File

We'll pass you an array of two numbers. Return the sum of those two numbers and
all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
  const rangeNum = [];
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  for (let i = min; i <= max; i += 1) {
    rangeNum.push(i);
  }

  return rangeNum.reduce((prev, curr) => {
    return prev + curr;
  });
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
