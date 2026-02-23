function validateForm(name, email, age) {
    try {
        if (name.trim() === "") {
            throw new Error("Name cannot be empty");
        }

        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Invalid email format");
        }

        if (isNaN(age) || age <= 0) {
            throw new Error("Invalid age");
        }

        console.log("All inputs are valid!");
    } catch (error) {
        console.error("Validation Error:", error.message);
    }
}

validateForm("Harshita", "test@gmail.com", 20);
validateForm("", "wrongemail", -5);