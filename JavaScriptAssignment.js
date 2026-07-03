// ==============================
// Task 1: Function Declaration
// ==============================

function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Divya");


// ==============================
// Task 2: Arrow Function
// ==============================

const double = (num) => {
    return num * 2;
};

console.log("Double of 10 is:", double(10));


// ==============================
// Task 3: Anonymous Function
// ==============================

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


// ==============================
// Task 4: Callback Function
// ==============================

function getUserData(callback) {
    console.log("Fetching user data...");

    setTimeout(function () {
        callback();
    }, 3000);
}

getUserData(function () {
    console.log("Call Back Function");
});