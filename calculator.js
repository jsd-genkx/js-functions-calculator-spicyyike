"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
        return "Cannot divide by zero";
    }
}

// Step 02: Create a Validation Function for Inputs

function validateInputs(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') { 
        return null;
    } else{
        return "Both inputs must be numbers"
    }
}


// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {
if (!validateInputs(num1, num2)) {
    if (operation === 'add') {
        return add(num1, num2);
    }   
    else if (operation === 'subtract') {
        return subtract(num1, num2);
    } else if (operation === 'multiply') {
        return multiply(num1, num2);
    } else if (operation === 'divide') {
        return divide(num1, num2);
    } else {
        return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
    }
    } else{
        return validateInputs(num1, num2);
    }
}

//   console.log(add(10, 5)); // returns 15
//   console.log(validateInputs(10, "a")); // returns 'Both inputs must be numbers'
//     console.log(calculator(10, 5, "add")); // returns 15
//    console.log(calculator(10, 5, "divide")); // returns 2
//    console.log(calculator(10, 0, "divide")); // returns 'Cannot divide by zero'
//    console.log(calculator(10, 5, "unknown")); // returns 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".'
//    console.log(validateInputs(10, 3));
//    console.log(calculator(3, "c", "multiply"));