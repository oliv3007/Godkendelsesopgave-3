const express = require('express');
const router = express.Router();

const user = require('../Modul/User.js');

//Implemterer CRUD for User

//Implementerer Create
router.post('/', (req, res) => {
    user.UsersArray = [user.User1, user.User2];
    res.json('Users created');
});

//Implementerer Read
router.get('/', (req, res) => {
    res.json(user.UsersArray);
});

//Implementerer Update
router.put('/', (req, res) => {
    user.UsersArray = [user.User1updated]
    res.json('User has been updated');
});

//Implementerer Delete
router.delete('/', (req, res) => {
    user.UsersArray = [];
    res.json("User deleted");
});


module.exports = router;