const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal, secondAnimal, ...restOfTheAnimals] = animals;

// console.log(firstAnimal)
// console.log(secondAnimal)
// console.log(restOfTheAnimals)



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};


let { email, password, ...restoftheinfo } = person;

// console.log(email)
// console.log(password)
// console.log(restoftheinfo)

let { ...personCopy } = person;

person.firstName = "Damian"

console.log(person);
console.log(personCopy);