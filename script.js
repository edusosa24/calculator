function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;

        case '-':
            result = substract(num1, num2);
            break;

        case '*':
            result = multiply(num1, num2);
            break;

        case '/':
            result = divide(num1, num2);
            break;
    }
}