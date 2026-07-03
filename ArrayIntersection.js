// Function to find the intersection of two arrays
function intersection(arr1, arr2) {
    let result = [];

    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {

        // Check if current element exists in second array
        if (arr2.includes(arr1[i])) {

            // Add only if it's not already in the result
            if (!result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

// Example 1: Typical Case
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log("Intersection:", intersection(arr1, arr2));

// Example 2: No Common Elements
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
console.log("Intersection:", intersection(arr3, arr4));

// Example 3: All Elements Common
let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3];
console.log("Intersection:", intersection(arr5, arr6));

// Example 4: Duplicate Elements
let arr7 = [1, 2, 2, 3, 4];
let arr8 = [2, 2, 4, 5];
console.log("Intersection:", intersection(arr7, arr8));