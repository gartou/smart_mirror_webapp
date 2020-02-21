console.log('Server is Initializing...')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server started on port ${config.port || 8081}`)
  })
