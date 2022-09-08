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

const numberButtons = document.querySelectorAll('.digit');
const display = document.querySelector('#display');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        console.log(display.textContent)
        display.textContent += button.textContent
    });
});
