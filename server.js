const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Controllers
app.use('/books', require('./controllers/books_controller.js'))

 
// Listen for Connections

app.listen(PORT, () => console.log("App is running!"))