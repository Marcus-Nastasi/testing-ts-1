"use strict";
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
sum.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    console.log(calculator(arr, 1));
};
sub.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    console.log(calculator(arr, 2));
};
mult.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    console.log(calculator(arr, 3));
};
divs.onclick = () => {
    const arr = inp.value.split(',').map((v) => Number(v));
    console.log(calculator(arr, 4));
};
//# sourceMappingURL=calculator.js.map