
    Calc = (action, a, b) => {
        if ((undefined == action) || (undefined == a) || (undefined == b)) {
            return "Error"
        } else switch (action) {
            case "sum":
                return a + b;
            case "sub":
                return a - b;
            case "multi":
                return a * b;
            case "share":
                return a / b;
            case "degree":
                return a ** b;
            case "remains":
                return a % b;
            default:
                return "unknown operation"
        }
    }

let buttons = document.querySelectorAll('.button');
let formResult = document.querySelector('.row.result')

for (const button of buttons) {
    switch (button.id) {
        case 'clean':
            button.onclick = () => {
                formResult.innerHTML =  '';
            }
            break;
        case 'remove':
            button.onclick = () => {
                formResult.innerHTML = formResult.innerHTML.slice(0, formResult.innerHTML.length - 1);
            }
            break;
        default:
            button.onclick = () => {
                formResult.innerHTML +=  button.id.substring(1)
            };
    } 
}