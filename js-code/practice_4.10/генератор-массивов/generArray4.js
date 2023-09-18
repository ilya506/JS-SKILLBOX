let array = [];
let n = -3;
let m = -10;
let count = 42;

for(let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (m - n) + n));
}

console.log(array);