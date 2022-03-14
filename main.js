Calc = (action, a, b) => {
    switch (action) {
        case "sum":
            return a + b;
        case "sub":
            return a - b;
        case "multi":
            return a * b;
        case "share":
            return a / b;
    }
}

let action = 'sum';
let firstNum = null;
let secondNum = null;
let continuationCalc = false;

let buttons = document.querySelectorAll('.button');
let formResult = document.querySelector('.row.result')

let cleanForm = () => {
    formResult.innerHTML = '';
    action = 'sum';
    firstNum = null;
    secondNum = null;
}

let addNumForm = (button) => {
    formResult.innerHTML += button.target.id.substring(1);
}

let removeNumForm = () => {
    formResult.innerHTML = formResult.innerHTML.slice(0, formResult.innerHTML.length - 1);
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
        formResult.innerHTML = '';
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
        formResult.innerHTML = '';
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