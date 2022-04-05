let Calc = (action, a, b) => {
    switch (action) {
        case "sum":
            return Number((a + b).toFixed(2));
        case "sub":
            return Number((a - b).toFixed(2));
        case "multi":
            return Number((a * b).toFixed(2));
        case "share":
            return Number((a / b).toFixed(2));
    }
}

let action = 'sum';
let firstNum = null;
let secondNum = null;
let continuationCalc = false;

let buttons = document.querySelectorAll('.button');
let formResult = document.querySelector('.row.result');
formResult.innerHTML = '0';

let cleanForm = () => {
    action = 'sum';
    firstNum = null;
    secondNum = null;
    formResult.innerHTML = '0';
}

let addNumForm = (button) => {
    if (formResult.innerHTML.length < 6) {
        if (button.target.id.substring(1) == '0' && formResult.innerHTML == '0') {
        } else {
            if (formResult.innerHTML === '0') {
                formResult.innerHTML = '';
            }
            formResult.innerHTML += button.target.id.substring(1);
        }
    }
}

let removeNumForm = () => {
    formResult.innerHTML = formResult.innerHTML.slice(0, formResult.innerHTML.length - 1);
    if (formResult.innerHTML === '') {
        formResult.innerHTML = '0';
    }
}

let result = () => {
    secondAction();
}

let actionButton = (button) => {
    if (button.target.id !== 'result') {
        action = button.target.id;
    }
    if (secondNum == null) {
        secondNum = Number(formResult.innerHTML);
        formResult.innerHTML = '0';
    } else if (firstNum == null) {
        firstNum = Number(formResult.innerHTML);
        secondNum = Calc(action, secondNum, firstNum);
        formResult.innerHTML = secondNum;
        firstNum = '';
    } else {
        secondAction(button);
    }
}

let secondAction = (button) => {
    if (button.target.id !== 'result') {
        action = button.target.id;
    }
    if (continuationCalc = !continuationCalc) {
        formResult.innerHTML = '0';
    } else {
        firstNum = Number(formResult.innerHTML);
        secondNum = Calc(action, secondNum, firstNum);
        formResult.innerHTML = secondNum;
    }
}

for (const button of buttons) {
    switch (button.id) {
        case 'clean':
            button.onclick = cleanForm;
            break;
        case 'remove':
            button.onclick = removeNumForm;
            break;
        default:
            if (button.id.slice(0, 1) === '_') {
                button.onclick = addNumForm;
            } else {
                button.onclick = actionButton;
            }
    }
}

import {a} from "./mod.js"
a();