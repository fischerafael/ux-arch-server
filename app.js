const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const router = require('./src/router')

const app = express()

mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3333, () => console.log('Server running'))