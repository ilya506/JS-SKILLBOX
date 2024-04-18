body = document.querySelector('body');

function createStudentsList (listArr) {
    let ul = document.createElement('ul');
    body.append(ul);
    listArr.forEach((elem) => {
        let li = document.createElement('li');
        ul.append(li);

        let h2 = document.createElement('h2');
        h2.textContent = elem.name;
        li.append(h2);

        let span = document.createElement('span');
        span.textContent = elem.age;
        li.append(span);
    });
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

createStudentsList(allStudents);



