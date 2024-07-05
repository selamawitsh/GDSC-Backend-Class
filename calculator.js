const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return +a + +b; 
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero.");
        return null;
    }
    return a / b;
}

function calculateBMI(weight, height) {
    if (height <= 0) {
        console.log("Height must be greater than zero.");
        return null;
    }
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function showMenu() {
    console.log("\nYour choice:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. BMI Calculator");
    console.log("6. Exit");
}

function handle_menu_choice(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter first number: ", (a) => {
                rl.question("Enter second number: ", (b) => {
                    console.log("Result:", add(a, b));
                    runMenu(); 
                });
            });
            break;
        case "2":
            rl.question("Enter first number: ", (a) => {
                rl.question("Enter second number: ", (b) => {
                    console.log("Result:", subtract(a, b));
                    runMenu(); 
                });
            });
            break;
        case "3":
            rl.question("Enter first number: ", (a) => {
                rl.question("Enter second number: ", (b) => {
                    console.log("Result:", multiply(a, b));
                    runMenu();
                });
            });
            break;
        case "4":
            rl.question("Enter first number: ", (a) => {
                rl.question("Enter second number: ", (b) => {
                    console.log("Result:", divide(a, b));
                    runMenu(); 
                });
            });
            break;
        case "5":
            rl.question("Enter weight in kg: ", (weight) => {
                rl.question("Enter height in meters: ", (height) => {
                    console.log("The BMI is:", calculateBMI(weight, height));
                    runMenu();
                });
            });
            break;
        case "6":
            console.log("Exiting...");
            rl.close();
            break;
        default:
            console.log("Invalid choice.");
            runMenu();
    }
}
function runMenu() {
    showMenu();
    rl.question("Enter your choice (1-6): ", (input) => {
        handle_menu_choice(input);
    });
}

runMenu();


