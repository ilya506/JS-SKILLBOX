let name = 'alecha';
let surname = 'popovich';

let correctName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let correctSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

let resultName = correctName != name || correctSurname != surname ? 'Имя было преобразованно' : 'Имя осталось без изменений';

console.log(correctName, correctSurname, resultName);
