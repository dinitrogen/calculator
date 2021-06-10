
let displayText = "0";
let operandA;
let operandB;
let operation;
let resetDisplay = true;
let operationStored = false;

const calcDisplay = document.querySelector("#calcDisplay");
calcDisplay.textContent = displayText;

// Clear button press
const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener('click', () => {
    displayText = "0";
    operandA = null;
    operandB = null;
    resetDisplay = true;
    operationStored = false;
    calcDisplay.textContent = displayText;
});

// Delete button press
const buttonDel = document.querySelector("#buttonDel");
buttonDel.addEventListener('click', () => {
    let displayTextStr = displayText.toString();
    if (displayTextStr.length === 1) {
        displayText = 0;
        resetDisplay = true;
    } else {
        displayText = displayText.slice(0, -1);
    }
    calcDisplay.textContent = displayText;
});

// Number buttons press
const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        updateDisplay(numButton.textContent);
    });
});

// Negative press
const buttonNegative = document.querySelector("#buttonNegative");
buttonNegative.addEventListener('click', () => {
    let displayTextStr = displayText.toString();
    if (displayTextStr === "0" || displayTextStr === "0.") {
        return;
    } else if (displayTextStr.charAt(0) === "-") {
        displayText = displayTextStr.slice(1);
    } else {
        displayText = `-${displayTextStr}`;
    }
    calcDisplay.textContent = displayText;
});

// Decimal point press
const buttonDecimal = document.querySelector("#buttonDecimal");
buttonDecimal.addEventListener('click', () => {
    if (resetDisplay) {
        displayText = "0.";
        resetDisplay = false;
        calcDisplay.textContent = displayText;
        return;
    }
    let strDisplay = displayText.toString();
    if (strDisplay.includes('.')) {
        return;
    } else {
        displayText = `${displayText}.`;
    }
    calcDisplay.textContent = displayText;
});

// Percent press
const buttonPercent = document.querySelector("#buttonPercent");
buttonPercent.addEventListener('click', () => {
    displayText = parseFloat(displayText) * 0.01;
    if (displayText.toString().length > 12) {
        displayText = displayText.toString().slice(0, 11);
    }
    calcDisplay.textContent = displayText;
});

// Equals press
const buttonEqual = document.querySelector("#buttonEqual");
buttonEqual.addEventListener('click', () => {
    if (!operandA|| !operationStored) {
        return;
    } else {
        operandB = displayText;
        displayText = operate();
        if (displayText.toString().length > 12) {
            displayText = displayText.toString().slice(0, 11);
        }
        calcDisplay.textContent = displayText;
        operandA = null;
        operationStored = false;
        resetDisplay = true;
    }
});

// Operations press
const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach((operatorButton) => {
    
    operatorButton.addEventListener('click', () => {
        if (!operandA && !operationStored) {
            operandA = displayText;
            operation = operatorButton.id;
            operationStored = true;
            resetDisplay = true;        
        } else if (operandA && !operationStored) {
            operation = operatorButton.id;
            operationStored = true;
            resetDisplay = true;
        } else {
            operandB = displayText;
            displayText = operate();
            if (displayText.toString().length > 12) {
                displayText = displayText.toString().slice(0, 11);
            }
            calcDisplay.textContent = displayText;
            operandA = displayText;
            operation = operatorButton.id;
            resetDisplay = true;   
        }
        console.log(operatorButton.id);
    });
});

// Numbers update display
function updateDisplay(buttonInput) {
    if (displayText.length >= 12) {
        return;
    } else if (resetDisplay === true) {
        displayText = `${buttonInput}`;
        resetDisplay = false;
    } else {
    displayText = `${displayText}${buttonInput}`;
    }
    calcDisplay.textContent = displayText;
}

function operate() {
    let a = parseFloat(operandA);
    let b = parseFloat(operandB);
    
    if (operation === "add") {
        return (a + b);
    } else if (operation === "subtract") {
        return (a - b);
    } else if (operation === "multiply") {
        return (a * b);
    } else if (operation === "divide") {
        return (a / b);
    } else {
        return;
    }
}

