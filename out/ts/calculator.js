const [sum, sub, mult, divs, inp] = [
    document.getElementById('sumCalculator'), document.getElementById('subCalculator'),
    document.getElementById('multCalculator'), document.getElementById('divsCalculator'),
    document.getElementById('inputNumbers')
];
function calculator(numbers, operation) {
    if (operation === 1)
        return numbers.reduce((acm, numb) => acm += numb);
    if (operation === 2)
        return numbers.reduce((acm, numb) => acm -= numb);
    if (operation === 3)
        return numbers.reduce((acm, numb) => acm *= numb);
    if (operation === 4)
        return numbers.reduce((acm, numb) => acm /= numb);
    return 0;
}
;
function handleImpression(value, operation) {
    const sec = document.getElementById('outputCalculatorSec');
    const p = document.createElement('p');
    let op;
    switch (operation) {
        case 1:
            op = `Sum: ${value}`;
            break;
        case 2:
            op = `Subtraction: ${value}`;
            break;
        case 3:
            op = `Multiplication: ${value}`;
            break;
        case 4:
            op = `Division: ${value}`;
            break;
        default: op = `Error in operation.`;
    }
    if (op !== null || op !== undefined)
        p.innerText = op;
    sec.appendChild(p);
}
;
sum.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 1), 1);
};
sub.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 2), 2);
};
mult.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 3), 3);
};
divs.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 4), 4);
};
//# sourceMappingURL=calculator.js.map