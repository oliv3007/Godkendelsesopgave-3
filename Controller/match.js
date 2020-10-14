const express = require('express');
const router = express.Router();

const match = require('../Modul/match.js');

//Implemtener CRUD for Match

//Implementerer Read
router.get('/', (req, res) => {
    res.json(match.matched);
});

//Implementerer Update
router.put('/', (req, res) => {
    res.json(user.UsersArray);
});

//Implementerer Delete
router.delete('/', (req, res) => {
    match.matched = [];
    res.json("Match deleted");
});

//Implementerer Create
router.post('/', (req, res) => {
    res.json(user.UsersArray);
});

module.exports = router;
