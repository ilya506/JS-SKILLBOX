let objects = [
    { name: 'Василий',
      surname: 'Васильев' },
    { name: 'Иван',
      surname: 'Иванов' },
    { name: 'Пётр',
      surname: 'Петров' }
  ];
  
  function filterObjValues(objects, key, value) {
    const result = [];
  
    for (let i = 0; i < objects.length; i++) {
  
      const obj = objects[i];
  
      if (obj[key] === value) result.push(obj);
    }
  
    return result;
  }
  
  const filteredArray = filterObjValues(objects, 'name', 'Иван');
  
  console.log(filteredArray)