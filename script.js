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
};

//operate(divide, 2, -2);

const numberButtons = document.querySelectorAll('.show');
const display = document.querySelector('#display');
let displayValue = display.textContent;

const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator')
//console.log(operators)

let currentOperation;
let firstNumber;
let secondNumber;

let operatorClicks = 0;

const getFirstNumber = operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(operatorClicks >= 1) {
            return 1; 
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
            operate(currentOperation, +firstNumber, +secondNumber);
            
        }
        operatorClicks++;
    });
});

const addNumbers = numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
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
        display.textContent = undefined;
    });
});

const getSecondNumber = equals.addEventListener('click', () => {
    displayValue = display.textContent;
    secondNumber = displayValue;
    display.textContent = undefined;

    //console.log(currentOperation);
    //console.log(+firstNumber, +secondNumber);
    operate(currentOperation, +firstNumber, +secondNumber);
});

const clear = document.querySelector('.clear');

const clearCalculator = clear.addEventListener('click', () => {
     currentOperation;
     firstNumber;
     secondNumber;
     display.textContent = undefined;
     operatorClicks = 0;
});


















