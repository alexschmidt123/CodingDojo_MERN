const express = require("express"); 
const app = express(); 
const port = 8000; 
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



class User {
    constructor() {
        this.id = faker.random.alphaNumeric(8);
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phonenumber = faker.phone.phoneNumber();
        this.email =faker.internet.email();
        this.password =faker.internet.password();
    }
}

app.get("/api/users/new", (req, res) => {
    let fakeUser = new User();
    res.json({ fakeUser })
})


class Company {
    constructor() {
        this.id = faker.random.alphaNumeric(8);
        this.name = faker.company.companyName()
        this.address = [faker.address.streetAddress(true), faker.address.cityName(), faker.address.state(),faker.address.zipCode(), faker.address.country()]
    }
}

app.get("/api/companies/new", (req, res) => {
    let fakeCompany = new Company();
    res.json({ fakeCompany })
})


app.get("/api/user/company", (req, res) => {
    let fakeCompany = new Company();
    let fakeUser = new User();
    res.json({ fakeUser,fakeCompany })
})





app.listen(port, () => console.log(`Listening on port: ${port}`));