const screenInput = document.querySelector(".input");
const screenResult = document.querySelector(".result");
const operators = ['+', '-', '*', '/'];
let storedInput = '';
let number1 = 0;
let number2 = 0;
let operator = '';
let operatorPosition = 0;
let result = 0;

function add() {
    return number1 + number2;
}

function substract() {
    return number1 - number2;
}

function multiply() {
    return number1 * number2;
}

function divide() {
    if (number2 == 0) {
        alert("You can't divide by 0!");
        return number1;
    }

    return number1 / number2;
}

function operate() {
    switch (operator) {
        case '+':
            result = add();
            break;

        case '-':
            result = substract();
            break;

        case '*':
            result = multiply();
            break;

        case '/':
            result = divide();
            break;

        default:
            break;
    }
}

function refreshScreen(btn) {
    storedInput += btn;

    screenInput.textContent = storedInput;
    screenResult.textContent = result;

    if (updateOperator()) {
        updateFirstNumber();
    }
}

function addToScreen(btn) {
    if (operators.includes(storedInput.charAt(storedInput.length - 1))
        && operators.includes(btn)) {
        deleteLast();
    }
    if (!operators.includes(btn) ||
        (operators.includes(btn) && operator == '' && storedInput != '')) {

        refreshScreen(btn);

        return;
    }
    if (operators.includes(btn) && !operators.includes(storedInput.charAt(storedInput.length - 1)
        && operator != '')) {
        solve();
        refreshScreen(btn);
    }
}

function deleteLast() {
    if (deleteOperator()) {
        updateFirstNumber();
    }
    storedInput = storedInput.toString().substring(0, storedInput.length - 1);
    screenInput.textContent = storedInput;
}

function cleanScreen() {
    storedInput = '';
    number1 = 0;
    number2 = 0;
    result = 0;
    operator = '';
    screenInput.textContent = '';
    screenResult.textContent = 0;
}

function updateFirstNumber() {
    if (number1 != '' && operator == '') {
        number1 = '';
    } else {
        number1 = Number(storedInput.toString().substring(0, storedInput.length - 1));
    }
}

function updateOperator() {
    if (operator != '') {
        if (operators.includes(storedInput.charAt(storedInput.length - 1))) {
            solve();
            return false;
        }
    }
    if (operators.includes(storedInput.toString().charAt(storedInput.length - 1))) {
        operator = storedInput.toString().charAt(storedInput.length - 1);
        operatorPosition = storedInput.length - 1;
        return true;
    }
    return false;
}

function deleteOperator() {
    if (operators.includes(storedInput.toString().charAt(storedInput.length - 1))) {
        operator = '';
        operatorPosition = 0;
        return true;
    }
    return false;
}

function updateSecondNumber() {
    number2 = Number(storedInput.toString().substring(operatorPosition + 1, storedInput.length));
}

function solve() {
    updateSecondNumber();
    operate();
    number1 = result;
    number2 = 0;
    operator = '';
    updateOperator();
    storedInput = result.toString() + operator;
    addToScreen('');
}