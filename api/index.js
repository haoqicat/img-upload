const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// mongoose START
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/img-upload')
const db = mongoose.connection
db.on('error', () => console.error('Mongo Failed to Connect!!!!'))
db.on('connected', () => console.log('Mongo Connected'))
// mongoose END

const routes = require('./routes')
routes(app)

app.listen(3009, () => console.log('running on port 3009...'))