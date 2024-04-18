function createStudent(age) {
  let nameCreate = document.createElement('h1');
  let ageCreate = document.createElement('span');
  let card = document.createElement('div');
  card.prepend(nameCreate);
  card.prepend(ageCreate);
  ageCreate.textContent = age;
  ageCreate.textContent = `: ${age} 17 лет`;
  document.body.append(card);
}
createStudent('Игорь');