let genderType = "female";

function printGender() {
    let color = "brown";

    if (genderType.startsWith("female")) {
        // var is function-scoped
        var age = 30;

        // Block-scoped variable
        let color = "pink";

        console.log("Color inside if block:", color);
    }

    console.log("Color outside if block:", color);
    console.log("Age outside if block:", age);
}

printGender();
console.log("Global genderType:", genderType);