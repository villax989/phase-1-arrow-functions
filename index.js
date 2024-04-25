const divide = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    } else {
        return a / b;
    }
};

const square = (num) => num * num;

const add = (a, b) => a + b;

// Test cases for divide
console.log(divide(2000, 100)); // Output: 20
console.log(divide(8, 0)); // Output: "Cannot divide by zero!"

// Test cases for square
console.log(square(5)); // Output: 25

// Test cases for add
console.log(add(5, 10)); // Output: 15