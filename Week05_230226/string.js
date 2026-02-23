let message = " Hello JavaScript ";

console.log("Original:", message);

// Remove spaces
let trimmed = message.trim();
console.log("Trimmed:", trimmed);

// Convert case
console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());

// Check substring
console.log("Includes 'Java':", trimmed.includes("Java"));

// Replace word
let replaced = trimmed.replace("JavaScript", "JS");
console.log("Replaced:", replaced);