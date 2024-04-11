function createStudentCard(name) {
    const el = document.createElement(name);
    for (const[key, value] of Object.entries(name)){
        if (key == 'classList') {
            for (const newClass of value) {
                el.classList.add(newClass)
            }
        }else{
            el[key] = value
        }
    }

    return el;
}

let div = createStudentCard('div', {
    classList: ['wrap'],
});

let h2 = createStudentCard('h2', {
    classList: ['text'],
    textContent: 'Игорь',
});

let span = createStudentCard('span', {
    classList: ['textarea'],
    textContent: 'Возраст: 17 лет'
});

document.body.append(div);
div.appendChild(h2);
div.appendChild(span);