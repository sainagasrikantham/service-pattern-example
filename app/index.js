// app.js
const express = require('express');
const userService = require('./users/service/index');

const app = express();
app.use(express.json());

// Endpoint to add a user
app.post('/users', async (req, res) => {
    try {
        console.log(`Received new user : ${JSON.stringify(req.body)}.`);
        const user = await userService.addUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error('Error adding user', error);
        res.status(500).send({ message: 'Error adding user' });
    }
});

// Endpoint to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching users' });
    }
});

// Endpoint to get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await userService.getUserById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error fetching user' });
    }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
