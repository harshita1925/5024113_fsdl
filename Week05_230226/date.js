let currentDate = new Date();

console.log("Current Date:", currentDate);

// Get individual parts
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Date:", currentDate.getDate());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Format date
let formattedDate = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
console.log("Formatted Date:", formattedDate);