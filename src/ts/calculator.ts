function calculator(numbers: Array<number>, operation: number): number {
   if(operation === 1) return numbers.reduce((acm: number, numb: number): number => acm += numb)
   if(operation === 2) return numbers.reduce((acm: number, numb: number): number => acm -= numb)
   if(operation === 3) return numbers.reduce((acm: number, numb: number): number => acm *= numb)
   if(operation === 4) return numbers.reduce((acm: number, numb: number): number => acm /= numb)
   return 0;
};

const nmbrs: Array<number> = [10, 10, 14, 15];

console.log(calculator(nmbrs, 1));
