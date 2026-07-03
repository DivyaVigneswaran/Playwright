// Global variable
let browser = "Chrome";

// Function with callback
function checkBrowserVersion(callback) {
    setTimeout(function () {
        callback(browser);
    }, 2000);
}

// Callback function
function printBrowserVersion(version) {
    console.log("Browser version using callback:", version);
}

// Function call
checkBrowserVersion(printBrowserVersion);