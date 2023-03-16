const express = require('express');
const port = 8000;

const app = express();

app.use(express.json());

const {faker} = require('@faker-js/faker');


const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    return user;
}

const createCompany = () => {
    company = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    return company;
}

app.get('/', (req, res) => {
    return res.send('hello from express!');
});

app.get('/api/user/new', (req, res) => {
    const user = createUser();
    res.json(user);
})

app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
})

app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    const userWithCompany = {
        user,
        company
    };
    res.json(userWithCompany);
})

app.listen(port, () => {
    console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});