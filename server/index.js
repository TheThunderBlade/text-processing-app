require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
