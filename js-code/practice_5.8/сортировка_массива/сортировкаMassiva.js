function arrSort( arr ) {//пузырьковая сортировка массива методом до и после
    let emptyArray = [];
    do {
      emptyArray = false;
      for( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i] > arr[i+1] ) {
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          emptyArray = true;
        }
      }
    } while ( emptyArray )
  }
  
  let arr = [2,5,1,3,4];
  arrSort( arr );
  console.log( arr );

  function arrSort2( arr2 ) {
    let emptyArray2;
    do {
      emptyArray2 = false;
      for( let i = 0; i < arr2.length - 1; i++ ) {
        if ( arr2[i] > arr2[i+1] ) {
          let temp2 = arr2[i];
          arr2[i] = arr2[i+1];
          arr2[i+1] = temp2;
          emptyArray2 = true;
        }
      }
    } while ( emptyArray2 )
  }
  
  let arr2 = [12,33,3,44,100];
  arrSort2( arr2 );
  console.log( arr2 );

  function arrSort3( arr3 ) {
    let emptyArray3;
    do {
      emptyArray = false;
      for( let i = 0; i < arr3.length - 1; i++ ) {
        if ( arr3[i] > arr3[i+1] ) {
          let temp3 = arr3[i];
          arr3[i] = arr3[i+1];
          arr3[i+1] = temp3;
          emptyArray3 = true;
        }
      }
    } while ( emptyArray3 )
  }
  
  let arr3 = [0,1];
  arrSort3( arr3 );
  console.log( arr3 );