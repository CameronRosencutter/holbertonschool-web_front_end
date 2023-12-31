function countPrimeNumbers(){
    let numOfPrimeNums = 0

    function isPrime(number) {
        status = 1;
        if (number < 2) {
            status = 0;
        }
        else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    status = 0;
                }
            }
        }
        return status
    }

    for (let num = 2; num < 101; num++) {
        if (isPrime(num) == 1) {
            numOfPrimeNums += 1
        }
    }

    return numOfPrimeNums;
}

let a = performance.now();
countPrimeNumbers();
let b = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (b - a) + ' milliseconds.');