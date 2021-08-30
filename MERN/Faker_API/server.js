const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () => {
    const user = {
        id: faker.random.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(), 
        password: faker.internet.password()
    }
    return user;
    
}


const createCompany = () => {
    const company ={
        id: faker.random.number(), 
        name: faker.name.findName(),
        address: [
                faker.address.streetName(), 
                faker.address.city(), 
                faker.address.state(), 
                faker.address.zipCode(),
                faker.address.country()
        ]
    }

    return company;
}

const users = createUser() ;
const company = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json(users);
});

app.get("/api/companies/new", (req, res) => {
    res.json( company );
});

app.get("/api/user/company", (req, res) => {
    res.json( [users , company] );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
