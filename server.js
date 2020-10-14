const express = require('express');
const User = require('./Modul/User');

const app = express()

//Laver routes og endpoints
/*app.get('./User', (req, res) => res.json());*/

app.get('/', function (req, res) {
    res.send('hello world')
  })


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


