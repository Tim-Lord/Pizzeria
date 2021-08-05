const express = require('express');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

const PORT = 3001;

const app = express();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    try {
        const data = await prisma.pizza.findMany();
        res.json(data)   
    } catch (error) {
        console.log(error);
        res.status(500)
        res.send('An error occurred, we are trying to fix it...')
    }
    
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server running on port, ${PORT}`)
})