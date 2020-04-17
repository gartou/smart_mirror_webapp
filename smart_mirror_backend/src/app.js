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
  .then(async () => {
    try {
      await sequelize.authenticate()
      console.log('\nConnection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
    // await sequelize.query("use datable;");
    // await sequelize.query("DELETE FROM users_parameters WHERE 1=1;");
    // await sequelize.query("DELETE FROM users WHERE 1=1;");
  })
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`\nServer started on port: ${config.port || 8081}`)
  })
