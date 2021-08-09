const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/pizza', async (req, res) => {
    try {
        const pizza = await prisma.pizza.findMany();
        res.json(pizza)
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.json({
            "message": "Server Error, we are fixing it. Try again later..."
        })
    }
});

router.get('/orders', async (req, res) => {
    try {
        const orders = await prisma.orderItem.findMany({
            include: {
                pizza: {
                    select: {
                        name: true,
                        price: true
                    }
                }
            }
        });
        res.json(orders)
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.json({
            "message": "Server Error, we are fixing it. Try again later..."
        })
    }
})

router.get('/order/:id', async(req, res) => {
    try {
        const order = await prisma.orderItem.findUnique({
            where: {
                id: req.params.id
            },
            include: {
                pizza: {
                    select: {
                        name: true,
                        price: true
                    }
                }
            }
        });
        res.json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.json({
            "message": "Server Error, we are fixing it. Try again later..."
        })
    }
});

router.post('/order/:id',  async(req, res) => {
    try {
        const order = await prisma.orderItem.create({
            data: {
                pizzaId: req.params.id,
                quantity: parseInt(req.body.quantity)
            }
        });
        res.json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.json({
            "message": "Server Error, we are fixing it. Try again later... "
        });
    }
});


module.exports = router