const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/get_pizza', async (req, res) => {
    try {
        const pizza = await prisma.pizza.findMany();
        res.json(pizza);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.json({
            "message": "Server Error, we are trying to fix it. Try again later..."
        })
    }
});

module.exports = router