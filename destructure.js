const actor = {
    name: 'John Doe',
    age: 35,
    country: 'USA'
};

const { name, age, country } = actor;

const { name: actorName, age: actorAge, country: actorCountry } = actor;

console.log(`${actorName} is ${actorAge} years old and comes from ${actorCountry}.`);

// array destructuring
const numbers = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = numbers;

console.log(`First: ${a}, Second: ${b}, Third: ${c}, Fourth: ${d}, Fifth: ${e}`);