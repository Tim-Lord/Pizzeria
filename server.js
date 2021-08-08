const express = require('express');

const PORT = 3001;

const app = express();

// set up middleware for getting body of request
app.use(express.json);

// routes
app.use('/pizzeria', require('./routes/shop'));


app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1)
    }
    console.log(`Server running on port, ${PORT}`)
})