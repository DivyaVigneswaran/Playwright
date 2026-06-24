function reverseString(str) {
    let characters = str.split("");
    let reversed = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reversed = reversed + characters[i];
    }

    console.log("Reversed String:", reversed);
    return reversed;
}

function isPalindrome(str) {
    let reversed = reverseString(str);

    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

// Test Cases
let input = "madam";

console.log("Original String:", input);
console.log("Is Palindrome?", isPalindrome(input));