let numbers = [10, 20, 30, 40];

console.log("Original Array:", numbers);

// Add element
numbers.push(50);

// Remove element
numbers.pop();

// Loop through array
numbers.forEach(num => {
    console.log("Number:", num);
});

// Find maximum
let max = Math.max(...numbers);
console.log("Maximum:", max);