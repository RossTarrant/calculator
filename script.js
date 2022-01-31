// Adds two integers and returns the result
function add(x, y){
    return x + y;
}

// Subtracts two integers and returns the result
function subtract(x, y){
    return x - y;
}

// Multiplies two integers and returns the result
function multiply(x, y){
    return x * y;
}

// Divides two integers and returns the result
function divide(x, y){
    return x / y;
}

// Takes in an operator and two numbers as parameters and returns the appropriate function based on the operator
function operate(operator, x, y){
    switch(operator){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
    }
}

// Updates the working display of the calculator with latest values
function updateDisplay(){
    let display = document.querySelector(".working-display");
    displayText = `${leftNum}${currentOperator}${rightNum}`
    display.textContent = displayText;
}

// Removes the last entered integer/operator from the working display
function back(){
    // If working with the left integer, remove latest input
    if(whichNum==="left" && leftNum!=""){
        leftNum = leftNum.substring(0, leftNum.length -1);
    }
    // If last entered data was operator, remove latest input
    else if(whichNum==="right" && rightNum.length===0){
        whichNum = "left";
        currentOperator = "";
        operatorsPressed = 0;
    }
    // If working with the right integer, remove latest input
    else{
        rightNum = rightNum.substring(0, rightNum.length -1);
    }
    updateDisplay();
}

// Clears the display and resets global variable values
function clearDisplay(){
    let totalDisplay = document.querySelector(".total-display");
    let workingDisplay = document.querySelector(".working-display");
    totalDisplay.textContent = "0";
    workingDisplay.textContent = "Cleared";
    leftNum = "";
    rightNum = "";
    whichNum = "left";
    currentOperator = "";
    operatorsPressed = 0;
}

// Takes in the button pressed as a parameter and handles what actions should occur
function buttonHandler(buttonText){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    let operators = ["="]
    // If the button pressed was an integer
    if(buttonText in nums || buttonText === "."){
        // Check if working with left or right integer and update accordingly
        if (whichNum==="left"){
            leftNum = leftNum + buttonText;
        }
        else{
            rightNum = rightNum + buttonText;
        }
        // Update display with new values
        updateDisplay(buttonText);
    }
    else if(buttonText==="+" || buttonText==="-" || buttonText==="x" || buttonText==="÷"){
        operatorsPressed ++;
        // If it is the first operator pressed, switch to working with right integer and update current operator
        if(operatorsPressed===1){
            whichNum = "right";
            currentOperator = buttonText;
            updateDisplay(buttonText)
        }
        // Else, work out calculation and update working display / total display.
        else{
            if(rightNum!=""){
                let total = operate(currentOperator, parseFloat(leftNum), parseFloat(rightNum));
                let totalDisplay = document.querySelector(".total-display");
                let workingDisplay = document.querySelector(".working-display");
                currentOperator = buttonText;
                workingDisplay.textContent = `${total}${currentOperator}`
                leftNum = total;
                rightNum = "";
                currentOperator = buttonText;
                totalDisplay.textContent = `${total}`;
            }
        }
    }
    // If the equals button has been pressed.
    else if(buttonText==="="){
        // If the user is being annoying and trying to divide by 0....zzzz...
        if(currentOperator==="÷" && rightNum === "0"){
            let totalDisplay = document.querySelector(".total-display");
            totalDisplay.textContent = "ERROR";
            let header = document.querySelector("h1");
            header.textContent = "Trying to divide by 0? Nice try..."
        }
        // Work out result and update working display and total display.
        else if(rightNum!="" && currentOperator!=""){
            let totalDisplay = document.querySelector(".total-display");
            let workingDisplay = document.querySelector(".working-display");
            let total = operate(currentOperator, parseFloat(leftNum), parseFloat(rightNum));
            totalDisplay.textContent = total;
            workingDisplay.textContent = workingDisplay.textContent + "="
            leftNum = total;
            rightNum = "";
            currentOperator = "";
            operatorsPressed = 0;
        }
    }
}

// Global variables that are used throughout the program
let leftNum = "";
let rightNum = "";
let whichNum = "left";
let currentOperator = "";
let operatorsPressed = 0;

// Adds an event listener to all of the calculator buttons (exlcuding function buttons)
const buttonsDiv = document.querySelector(".calc-buttons");
const buttons = buttonsDiv.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttonHandler(button.textContent);
    });
})

// Adds an event listener to the page that listens for key presses
document.addEventListener("keydown", function(event){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    // Checks if an integer of operator was pressed, filters out other keys (e.g. letters)
    if(event.key in nums){
        buttonHandler(event.key);
    }
    else if(event.key==="+" || event.key==="-" || event.key==="x" || event.key==="÷"){
        buttonHandler(event.key);
    }
})

// Adds an event listener to listen for the clear button 
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    clearDisplay();
})

// Adds an event listener to listen for the back button
const backButton = document.querySelector(".back");
backButton.addEventListener("click", () => {
    back();
})