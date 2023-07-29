let a = 13.1234567;
let b = 2.891564;
let n = 2;

let num1 = Math.round(a % 1 * Math.pow(10, n));
let num2 = Math.round(b % 1 * Math.pow(10, n));

console.log(num1, num2);

console.log('Исходные числа равны', a === b);
console.log('Оба числа равны', num1 === num2);
console.log('Первое число больше', num1 > num2);
console.log('Первое число меньше', num1 < num2);
console.log('Первое число не равно второму', num1 != num2);
console.log('Первое число больше либо равно первому', num1 >= num2);
console.log('Первое число меньше либо равно первому', num1 <= num2);