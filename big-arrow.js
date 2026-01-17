const getAge = (person) => person.age;
const person = { name: 'Alice', age: 30 };
const age = getAge(person);
console.log(`${person.name} is ${age} years old.`);