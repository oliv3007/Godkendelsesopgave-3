const express = require('express');
const app = express();

//Laver endpoints
app.get('/', (req, res) => {
  res.send('Root of the CRUD')
});

// user endpoint 
const user = require('./Controller/user.js');
app.use('/user', user);

// interest endpoint
const interest = require('./Controller/interest');
app.use('/interest', interest);

// match endpoint
const match = require('./Controller/match');
app.use('/match', match);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


