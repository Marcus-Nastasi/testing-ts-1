const [sum, sub, mult, divs, inp, clean] = [
    document.getElementById('sumCalculator'), document.getElementById('subCalculator'),
    document.getElementById('multCalculator'), document.getElementById('divsCalculator'),
    document.getElementById('inputNumbers'), document.getElementById('cleanCalculator')
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
            op = `Division: ${value.toFixed(2)}`;
            break;
        default: op = `Error in operation.`;
    }
    if (op !== null || op !== undefined)
        p.innerText += op;
    sec.appendChild(p);
}
;
function handleError(msg) {
    const sec = document.getElementById('outputCalculatorSec');
    const p = document.createElement('p');
    p.classList.add('text-red-900', 'p-4', 'bg-red-400', 'm-2', 'rounded-md');
    p.innerText = `Erro: ${msg}`;
    sec.appendChild(p);
    setTimeout(() => sec.removeChild(p), 2000);
}
;
sum.onclick = () => {
    if (inp.value.length === 0)
        return handleError('preencha algum número');
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 1), 1);
};
sub.onclick = () => {
    if (inp.value.length === 0)
        return handleError('preencha algum número');
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 2), 2);
};
mult.onclick = () => {
    if (inp.value.length === 0)
        return handleError('preencha algum número');
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 3), 3);
};
divs.onclick = () => {
    if (inp.value.length === 0)
        return handleError('preencha algum número');
    const arr = inp.value.split(',').map((v) => Number(v));
    handleImpression(calculator(arr, 4), 4);
};
clean.onclick = () => document.getElementById('outputCalculatorSec').innerHTML = '';
//# sourceMappingURL=calculator.js.map