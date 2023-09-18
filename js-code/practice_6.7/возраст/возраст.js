let OlderPerson = [
    {
      name: 'Валя',
      age: 11
    },
    {
      name: 'Таня',
      age: 24
    },
    {
      name: 'Рома',
      age: 21
    },
    {
      name: 'Надя',
      age: 34
    },
    {
      name: 'Антон',
      age: 7
    }
  ]
  function getOlderUserArray(OlderArray){
    let arr = [];
    for(let i of OlderArray){
      arr.push(i.age);
    }
    let obj = OlderArray.filter( item => item.age >= Math.max(...arr))[0].name
  
    return obj;
  }
  
  console.log(getOlderUserArray(OlderPerson))