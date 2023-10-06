let displayValue = '0';
let currentOperator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = firstOperand + ' ' + currentOperator + ' ' + displayValue;
}

function appendToDisplay(digit) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

function operate(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    firstOperand = displayValue;
    currentOperator = operator;
    waitingForSecondOperand = true;
    updateDisplay();
}

function calculate() {
    if (currentOperator === '') {
        return;
    }
    const secondOperand = displayValue;
    switch (currentOperator) {
        case '+':
            displayValue = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
            break;
        case '-':
            displayValue = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
            break;
        case '*':
            displayValue = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
            break;
        case '/':
            if (secondOperand === '0') {
                displayValue = 'Error';
            } else {
                displayValue = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
            }
            break;
    }
    currentOperator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

updateDisplay();
