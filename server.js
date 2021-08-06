const express = require('express');
const { PrismaClient } = require('@prisma/client');

const PORT = 3001;

const app = express();
const prisma = new PrismaClient();

app.get('/pizza', async(req, res) => {
    try {
        const data = await prisma.pizza.findMany()
        res.json(data)
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send('Server error, we are fixing it, try again later...')
    }
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1)
    }
    console.log(`Server running on port, ${PORT}`)
})