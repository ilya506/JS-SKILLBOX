let array = [];
let n = 2;
let m = 5;
let count = 50;

for(let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (m - n) + n));
}

console.log(array);