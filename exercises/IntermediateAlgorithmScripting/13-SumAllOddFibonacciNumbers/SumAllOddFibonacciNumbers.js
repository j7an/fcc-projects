/* Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first six
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let prev = 0, curr = 1, total = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      total += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  num = total;
  console.log(num);
  return num = total;
}

sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);
