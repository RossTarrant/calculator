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
    let display = document.querySelector(".working-display");
    displayText = `${leftNum}${currentOperator}${rightNum}`
    display.textContent = displayText;
}


function buttonHandler(buttonText){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    let operators = ["="]
    if(buttonText in nums){
        if (whichNum==="left"){
            leftNum = leftNum + buttonText;
        }
        else{
            rightNum = rightNum + buttonText;
        }
        updateDisplay(buttonText);
    }
    else if(buttonText==="+" || buttonText==="-" || buttonText==="x" || buttonText==="÷"){
        operatorsPressed ++;
        if(operatorsPressed===1){
            whichNum = "right";
            currentOperator = buttonText;
            updateDisplay(buttonText)
        }
        else{
            if(rightNum!=""){
                let total = operate(currentOperator, parseInt(leftNum), parseInt(rightNum));
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
    else if(buttonText==="="){
        if(rightNum!="" && currentOperator!=""){
            let totalDisplay = document.querySelector(".total-display");
            let workingDisplay = document.querySelector(".working-display");
            let total = operate(currentOperator, parseInt(leftNum), parseInt(rightNum));
            totalDisplay.textContent = total;
            workingDisplay.textContent = workingDisplay.textContent + "="
            leftNum = total;
            rightNum = "";
            currentOperator = "";
            operatorsPressed = 0;
        }
    }
}

let leftNum = "";
let rightNum = "";
let whichNum = "left";
let currentOperator = "";
let operatorsPressed = 0;

const buttonsDiv = document.querySelector(".calc-buttons");
const buttons = buttonsDiv.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttonHandler(button.textContent);
    });
})

document.addEventListener("keydown", function(event){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    if(event.key in nums){
        buttonHandler(event.key);
    }
    else if(event.key==="+" || event.key==="-" || event.key==="x" || event.key==="÷"){
        buttonHandler(event.key);
    }
})