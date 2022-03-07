const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

//old way
let bobsFirstName = person.firstName;
let bobslastName = person.lastName;
let bobsemail = person.email;

// console.log(bobsFirstName)


//new es6 way of doing the above (refered to as DESTRUCTURING!)

let { firstName: primeroNombre, lastName, email: bobsemailAnothaOne } = person;
// console.log(primeroNombre)
// console.log(lastName)
// console.log(bobsemailAnothaOne)



const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//old way
let dog = animals[1];
let cat = animals[3];

//new way - destructuring from an aray

// let [,dog2,pescado,cat2,] = animals;
let [, , , , tweety] = animals

// console.log(dog2)
// console.log(cat2)
// console.log(pescado)
// console.log(tweety)



const anotherPerson = {
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

//old way
// let firstAddress = anotherPerson.addresses[0].address
// let secondCity = anotherPerson.addresses[1].city

// console.log(firstAddress)
// console.log(secondCity)



let { addresses: [, { city: secondCity }] } = anotherPerson;

console.log(secondCity)

