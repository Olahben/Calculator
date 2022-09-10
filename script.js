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
    console.log(operator(num, num2));
};

operate(divide, 2, -2);

const numberButtons = document.querySelectorAll('.show');
const display = document.querySelector('#display');

const operators = document.querySelectorAll('.operator')
let currentOperator = undefined;
//console.log(operators)
//console.log(currentOperator)

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        /*if(typeof currentOperator == 'undefined') {
            display.textContent += button.textContent;
        } else {
            console.log('An operator has already been chosen')
        }*/
        
        //console.log(button.textContent);
        //console.log(display.textContent)
    });
});

const updateCurrentOperator = operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent === '+') {
            currentOperator = '+';
        } else if(button.textContent === '-') {
            currentOperator = '-';
        } else if(button.textContent === '*') {
            currentOperator = '*';
        } else if(button.textContent === '/') {
            currentOperator = '/';
        } 
        /*if(typeof currentOperator !== 'undefined') {
            console.log('An operator is already chosen');
        }*/
    });
});

let firstNum = undefined;









