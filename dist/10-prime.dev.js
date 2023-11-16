"use strict";

function countPrimeNumbers() {
  var numOfPrimeNums = 0;

  function isPrime(number) {
    status = 1;

    if (number < 2) {
      status = 0;
    } else {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          status = 0;
        }
      }
    }

    return status;
  }

  for (var num = 2; num < 101; num++) {
    if (isPrime(num) == 1) {
      numOfPrimeNums += 1;
    }
  }

  return numOfPrimeNums;
}

var a = performance.now();

for (var i = 0; i < 100; i++) {
  countPrimeNumbers();
}

var b = performance.now();
console.log("Execution time of calculating prime numbers 100 times was ".concat(b - a, " milliseconds."));