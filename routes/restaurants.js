const router = require('express').Router()
const Restaurant = require('../models/Restaurant')

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({})
        res.send(restaurants)
    } catch (error) {
        console.log(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const checkIfResExists = await Restaurant.findOne({ name: req.body.name })
        if (checkIfResExists ) return res.send('Restaurant already exists')
    } catch (error) {
        console.log(error)
    }

    const restaurant = new Restaurant({
        name: req.body.name,
        rating: req.body.rating,
        cost: req.body.cost,
        spec: req.body.spec,
        area: req.body.area
    })

    try {
        const savedRes = await restaurant.save()
        res.send(savedRes)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router