// let getAge = (birthday) => {//принимает строку даты
//     let ageDifMs = Date.now() - new Date(birthday).getTime();//мы вычитаем Date.now, у которого есть отметка времени текущей даты в миллисекундах.
//     let ageDate = new Date(ageDifMs);//присваиваем результат ageDifMs
//     return Math.abs(ageDate.getFullYear() - 2019);//вызываем getUTCFullYear, чтобы получить год
//   }
//   console.log(getAge('1998'));

//   let getAge2 = (birthday) => {
//     let ageDifMs = Date.now() - new Date(birthday).getTime();
//     let ageDate = new Date(ageDifMs);
//     return Math.abs(ageDate.getFullYear() - 2033);
//   }
//   console.log(getAge2('1991'));

//   let getAge3 = (birthday) => {
//     let ageDifMs = Date.now() - new Date(birthday).getTime();
//     let ageDate = new Date(ageDifMs);
//     return Math.abs(ageDate.getFullYear() - 2001);
//   }
//   console.log(getAge3('2007'));
