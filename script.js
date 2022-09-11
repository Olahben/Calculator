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
const displayValue = display.textContent;

const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator')
//console.log(operators)

const addNumbers = numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

const getFirstNumber = operators.forEach((button) => {
    button.addEventListener('click', () => {

    });
});













