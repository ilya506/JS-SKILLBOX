let arr = [1,2,3,4,5];

const changeOrder = (arr) => {
    for(let i=1; i< arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let x = arr[i]
                arr[i] = arr[j]
                arr[j] = x
            }
        }
    }
    return arr;
}

let result = changeOrder(arr);
console.log(result)