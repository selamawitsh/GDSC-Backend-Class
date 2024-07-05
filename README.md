Node.js Calculator Application

Overview: This Node.js application features a command-line interface for performing basic arithmetic operations and calculating BMI.

Features: Users interact via console.log menu options for addition, subtraction, multiplication, division, and BMI calculation.
Each operation has dedicated error handling to prevent division by zero and ensure accurate BMI computations.

Event Handling: Utilizes readline for asynchronous user input, displaying results through callback functions.

Continuous Operation: After each calculation, the menu reappears automatically, allowing seamless multiple operations.

Challenges: Managing asynchronous input with readline and implementing robust error checks for edge cases like division by zero and invalid BMI inputs.

Implementation: Structured with clear separation: runMenu manages menu flow, and each operation (add, subtract, multiply, divide, calculateBMI) functions independently.

Usage: Install Node.js, clone repository, navigate to directory, run npm install for dependencies, start with node index.js, and follow prompts for calculations or exit.
