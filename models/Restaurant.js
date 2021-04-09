const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    rating: {
        type: 'String',
        required: true
    },
    image: {
        type: 'String',
        required: true
    },
    cost: {
        type: 'String',
        required: true
    },
    spec: {
        type: 'String',
        required: true
    },
    area: {
        type: 'String',
        required: true
    },
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
