let result = 0;
let currentOperation;
let firstNumber;
let secondNumber;

let operatorClicks = 0;




const numberButtons = document.querySelectorAll('.show');
const display = document.querySelector('#display');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator')

function add(num, num2) {
    return num + num2;
}

function subtract(num, num2) {
    return num - num2;
}

function multiply(num, num2) {
    return num * num2;
}

function divide(num, num2) {
    if(num == 0 || num2 == 0) {
        return 'Error'
    }
    return num / num2;
}

function operate(operator, num, num2) {
    display.textContent += operator(num, num2);
    console.log(operator(num, num2));
    result = display.textContent;
    if(result !== 0) {
        firstNumber = result;
    }
};

const getFirstNumber = operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(operatorClicks > 1) {
            return 1; // stops function
        }
        displayValue = display.textContent;
        firstNumber = displayValue;
    });
});

const checkOperatorClicks = operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(operatorClicks >= 1) {
            secondNumber = display.textContent
            console.log(currentOperation)
            console.log(firstNumber, secondNumber);
            display.textContent = undefined;
            operate(currentOperation, +firstNumber, +secondNumber);
            
        }
        operatorClicks++;
    });
});

const displayMessage = document.querySelector('.display-message')

const addNumbers = numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(result == display.textContent) {
            display.textContent = undefined
        } 
         if(result == firstNumber) {
            secondNumber = button.textContent
            display.textContent += button.textContent;
        } else {
            display.textContent += button.textContent;
        }

        if(display.textContent.length == 22) {
            displayMessage.textContent = "ERROR"
        }
    });
});




const saveOperation = operators.forEach((operator) => {
    operator.addEventListener('click', () => {

        if(operator.textContent === '+') {
            currentOperation = add;
        } else if(operator.textContent === '-') {
            currentOperation = subtract;
        } else if(operator.textContent === '*') {
            currentOperation = multiply;
        } else if(operator.textContent === '/') {
            currentOperation = divide;
        }
        if(operatorClicks <= 1) {
            display.textContent = undefined;
        }
    });
});

const getSecondNumber = equals.addEventListener('click', () => {
    displayValue = display.textContent;
    secondNumber = displayValue;
    display.textContent = undefined;

    operate(currentOperation, +firstNumber, +secondNumber);
});

const clear = document.querySelector('.clear');

const clearCalculator = clear.addEventListener('click', () => {
     currentOperation;
     firstNumber;
     secondNumber;
     display.textContent = undefined;
     operatorClicks = 0;
     result = 0;
});



let displayValue = display.textContent;

const addKeyboardSupport = window.addEventListener('keydown', (e) => {
    if(typeof +e.key === 'number') {
        display.textContent += e.key;
    }
    //console.log(typeof +e.key)
});












