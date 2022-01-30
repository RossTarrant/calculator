function add(x, y){
    return x + y;
}


function subtract(x, y){
    return x - y;
}


function multiply(x, y){
    return x * y;
}


function divide(x, y){
    return x / y;
}


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


function updateDisplay(buttonText){
    let display = document.querySelector(".display");
    displayText = display.textContent;
    displayText = displayText + buttonText;
    display.textContent = displayText;
}


function buttonHandler(buttonText){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    let operators = ["="]
    if(buttonText in nums){
        updateDisplay(buttonText);
    }
    else if(buttonText==="+" || buttonText==="-" || buttonText==="x" || buttonText==="÷"){
        currentOperator = buttonText;
        if(whichNum==="left"){
            let display = document.querySelector(".display");
            leftNum = parseInt(display.textContent);
            whichNum==="right";
        }
        updateDisplay(buttonText)
    }
    else if(buttonText==="="){
        let display = document.querySelector(".display");
        rightNum = parseInt(display.textContent.split(currentOperator)[1]);
        display.textContent = operate(currentOperator, leftNum, rightNum);
    }
}

let leftNum = 0;
let rightNum = 0;
let whichNum = "left";
let currentOperator = "";

const buttonsDiv = document.querySelector(".calc-buttons");
const buttons = buttonsDiv.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttonHandler(button.textContent);
    });
})