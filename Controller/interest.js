const express = require('express');
const router = express.Router();

const interest = require('../Modul/interest.js');

//Implemtener CRUD for Match

//Implementerer Read
router.get('/', (req, res) => {
    res.json([interest.myInterest1, interest.myInterest2]);
});

//Implementerer Update
router.put('/', (req, res) => {
    res.json(user.UsersArray);
});

//Implementerer Delete
router.delete('/', (req, res) => {
    [interest.myInterest1, interest.myInterest2] = [];
    res.json("Interests deleted");
});

//Implementerer Create
router.post('/', (req, res) => {
    res.json(user.UsersArray);
});

module.exports = router;