const [ sum, sub, mult, divs, inp ]: any = [
   document.getElementById('sumCalculator'), document.getElementById('subCalculator'),
   document.getElementById('multCalculator'), document.getElementById('divsCalculator'),
   document.getElementById('inputNumbers')
];

function calculator(numbers: Array<number>, operation: number): number {
   if(operation === 1) return numbers.reduce((acm: number, numb: number): number => acm += numb)
   if(operation === 2) return numbers.reduce((acm: number, numb: number): number => acm -= numb)
   if(operation === 3) return numbers.reduce((acm: number, numb: number): number => acm *= numb)
   if(operation === 4) return numbers.reduce((acm: number, numb: number): number => acm /= numb)
   return 0;
};

sum.onclick = () => {
   const arr: Array<number> = inp.value.split(',').map((v: string) => Number(v));
   console.log(calculator(arr, 1));
};

sub.onclick = () => {
   const arr: Array<number> = inp.value.split(',').map((v: string) => Number(v));
   console.log(calculator(arr, 2));
};

mult.onclick = () => {
   const arr: Array<number> = inp.value.split(',').map((v: string) => Number(v));
   console.log(calculator(arr, 3));
};

divs.onclick = () => {
   const arr: Array<number> = inp.value.split(',').map((v: string) => Number(v));
   console.log(calculator(arr, 4));
};

