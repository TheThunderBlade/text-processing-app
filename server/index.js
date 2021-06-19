require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})