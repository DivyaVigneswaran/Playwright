function launchBrowser(browserName){
if (browserName === "chrome") {
    console.log("This is a Chrome");   
    
} else {
    console.log("This is not a Chrome");  
    
}
}
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}

// Function Calls
launchBrowser("chrome");
runTests("sanity");