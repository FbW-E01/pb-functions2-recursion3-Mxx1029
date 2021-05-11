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

// again, got it from Stack Overflow - and from Joel's explanation, now it's clearer

const fibonnaci = number => {
    if (number === 0) {
        return [number];
    };
    if (number === 1) {
        return [number - 1, number];
    };

    let previous = fibonnaci(number - 1); // previous will be an array
    
    const currentNumber = previous[previous.length - 2] + previous[previous.length - 1];
    previous.push(currentNumber);

    return previous;
    // shorter way, but harder to understand: 
    // return [...previous, previous[number - 2] + previous[number -1]];  // return array with all previous elements and add new elements by adding the sum of the previous 2 numbers
};

const result = fibonnaci(8);
console.log(result);


// BUT: based on this jamble I at least managed one solution that uses a for loop instead which I CAN wrap my head around

const fib = number => {
    
    let resArray = [0, 1];
    for (counter = 0; counter < number - 1; counter++) { // same condition as in the recursion above
        resArray.push(resArray[resArray.length - 2] + resArray[resArray.length - 1]);
    };
    return resArray;
};

console.log(fib(8));