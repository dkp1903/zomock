const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const restaurantsRoute = require('./routes/restaurants')

app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, 
                    () => console.log('Connected to Database.'))

app.use(express.json())

app.use('/restaurants', restaurantsRoute)

app.listen(PORT, () => 
        console.log(`Server listening on port ${PORT}`))