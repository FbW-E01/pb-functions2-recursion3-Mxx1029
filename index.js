// # Recursion

// #### Find the nth Fibonacci number
// * Write a JavaScript program to get the first n Fibonacci numbers.

// * Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// - fibonnaci(0)=> [0]
// - fibonnaci(1)=> [0,1]
// - fibonnaci(2)=> [0,1,1]
// - fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
 
// ```javascript
//     fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]  
// ```

// again, got it from Stack Overflow - this time I don't understand the solution at all... I can't even try to write the different steps out, don't get it at all

const fibonnaci = number => {
    if (number === 0) {
        return [0];
    };
    if (number === 1) {
        return [0, 1];
    };
    let array = fibonnaci(number - 1);
    return [...array, array[number - 2] + array[number -1]];
};

const result = fibonnaci(8);
console.log(result);


// BUT: based on this jamble I at least managed one solution that uses a for loop instead which I CAN wrap my head around

const fib = number => {
    
    let resArray = [0, 1];
    for (counter = 0; counter < number - 1; counter++) {
        resArray.push(resArray[resArray.length - 2] + resArray[resArray.length - 1]);
    };
    return resArray;
};

console.log(fib(8));