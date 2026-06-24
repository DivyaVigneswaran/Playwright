const browserName = "Chrome"; // Global variable

function getBrowserName() {

    if (browserName === "Chrome") {
        var browserName = "Firefox"; // Function-scoped variable
    }

    console.log("Inside Function:", browserName);
}

getBrowserName();

console.log("Global Variable:", browserName);