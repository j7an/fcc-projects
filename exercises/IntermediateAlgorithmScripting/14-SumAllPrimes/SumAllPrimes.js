/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two
divisors, one and itself. For example, 2 is a prime number because it's only
divisible by one and two.

The provided number may not be a prime.
*/

function isPrime(prime) {
  let start = 2;
  while (start <= Math.sqrt(prime)) {
    if (prime % start++ < 1) {
      return false;
    }
  }
  return prime > 1;
}

function sumPrimes(num) {
  let primeTotal = 0;

  for (let i = 1; i <= num; i += 1) {
    if (isPrime(i)) {
      primeTotal += i;
    }
  }
  // console.log(num);
  return primeTotal;
}

sumPrimes(10);
sumPrimes(977);
