// Asynchronous isPrime function using Promise
const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }
        resolve({ prime: true });
    });
};

// Test code using async/await
const testIsPrime = async (n) => {
    console.log('start');
    try {
        const result = await isPrime(n);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    console.log('end');
};

// Execute the test
testIsPrime(7);
