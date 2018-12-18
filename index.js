const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const questionnaire = require('./routes/questionnaire')
const response = require('./routes/response')

// MongoDB
// -------

const defaultDbUri =
  'mongodb://admin:takehome100@ds135704.mlab.com:35704/take-home-db'
const dbUri = process.env.DB_URI || defaultDbUri

mongoose.Promise = global.Promise
mongoose.connection.on(
  'connected',
  console.log.bind(console, `Mongoose connected to ${dbUri}.`)
)
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
)

// intialize db connection
mongoose.connect(
  dbUri,
  { useNewUrlParser: true }
)

// Express Server
// --------------

const port = 3001
const app = express()

// disable CORS
app.use(cors())
app.options('*', cors())

// register morgan
app.use(morgan('dev')) // log every request to console

// register body parser
app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

// register routes
app.use('/questionnaire', questionnaire)
app.use('/response', response)

// intialize server
app.listen(port, console.log.bind(console, `Server running on port ${port}.`))
