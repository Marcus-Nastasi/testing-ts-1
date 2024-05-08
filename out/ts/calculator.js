"use strict";
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
const nmbrs = [10, 10, 14, 15];
console.log("soma: " + calculator(nmbrs, 1).toFixed(2));
console.log("subtração: " + calculator(nmbrs, 2).toFixed(2));
console.log("multiplicação: " + calculator(nmbrs, 3).toFixed(2));
console.log("divisão: " + calculator(nmbrs, 4).toFixed(2));
//# sourceMappingURL=calculator.js.map