import {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  } from './calculator.js';

const calcDisplay = document.querySelector("#calcDisplay");

    
let displayText = "0";
calcDisplay.textContent = displayText;

// Clear button press
const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener('click', () => {
    displayText = "0";
    calcDisplay.textContent = displayText;
});

// Number buttons press
const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((numButton) => {
    
    numButton.addEventListener('click', () => {
        updateDisplay(numButton.textContent);
    });
});

// TODO Negative press
// TODO Decimal point press
// TODO Operations press


// Numbers update display
function updateDisplay(buttonInput) {
    if (displayText === "0") {
        displayText = `${buttonInput}`;
    } else {
    displayText = `${displayText}${buttonInput}`;
    }
    calcDisplay.textContent = displayText;
}