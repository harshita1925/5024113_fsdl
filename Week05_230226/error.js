function login(username, password) {
    try {
        if (username === "") {
            throw "Username is required";
        }

        if (password.length < 6) {
            throw "Password must be at least 6 characters";
        }

        console.log("Login Successful");
    }
    catch (error) {
        console.error("Login Error:", error);
    }
    finally {
        console.log("Login attempt finished.");
    }
}

login("Harshita", "123456");
login("123", "1");