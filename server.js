const express = require('express');

const app = express();

const PORT = 3001;

// Initialise a middleware to get the body of the request
app.use(express.json());

// Routing
app.use('/pizzeria', require('./routes/shop'))

app.listen(PORT, (error) => {
    if(error) console.log(error.message);
    console.log(`Server is running on port ${PORT}`)
});