// Function to calculate grade
function calculateGrade(score) {

    let grade;

    switch (true) {

        case (score >= 90 && score <= 100):
            grade = "A Grade";
            break;

        case (score >= 80 && score < 90):
            grade = "B Grade";
            break;

        case (score >= 70 && score < 80):
            grade = "C Grade";
            break;

        case (score >= 60 && score < 70):
            grade = "D Grade";
            break;

        case (score < 60 && score >= 0):
            grade = "Fail";
            break;

        default:
            grade = "Invalid Score";
    }

    return grade;
}

// Declare and initialize variable
let studentScore = 85;

// Call function and print result
console.log("Score:", studentScore);
console.log("Grade:", calculateGrade(studentScore));