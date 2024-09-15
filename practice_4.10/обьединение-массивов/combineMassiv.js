function returnNums(arr1, arr2) {
    let numArr = []
    for (const val of arr1) {
      if (typeof val === 'number') numArr.push(val)
    }
    for (const val of arr2) {
      if (typeof val === 'number') numArr.push(val)
    }
    return numArr;
  }
  
  console.info(returnNums([2, 2, 17, 21, 45, 12, 54, 31, 53], [12, 44, 23, 5]))