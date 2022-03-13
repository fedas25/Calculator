
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

let buttons = document.querySelectorAll('.button');
let formResult = document.querySelector('.row.result')

let cleanForm = () => {
    formResult.innerHTML = '';
}

let addNumForm = (button) => {
    formResult.innerHTML += button.target.id.substring(1);
}

let removeNumForm = () => {
    formResult.innerHTML = formResult.innerHTML.slice(0, formResult.innerHTML.length - 1);
}

let actionButton = () => {

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
            if (button.id.slice(0,1) === '_') {
                button.onclick = addNumForm;
            } else {
                button.onclick = actionButton;
            }
            
    }
}