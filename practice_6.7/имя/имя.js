var person1 = {
  name: "Jeremy",
  age: 24,
  };

  var person2 = {
  name: "Chase",
  age: 15,
  };

function AgePerson(person) {

  if (person.age >= 16) {
return person.name + " is old enough to drive.";
  }

  else {
return person.name + " is not old enough to drive.";
  }
}

  console.log(AgePerson(person1));
console.log(AgePerson(person2));