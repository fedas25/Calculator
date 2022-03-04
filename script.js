let operations = {
    Calc : (action, a, b) => {
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
}
