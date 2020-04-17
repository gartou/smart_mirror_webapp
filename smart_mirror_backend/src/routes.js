const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

const UserDataController = require('./controllers/UserDataController')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })

  app.post('/register',
    AuthenticationPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  // USER
  app.post('/usersettings',
    UserDataController.usersettings)

  app.post('/usermirrorsettings',
    UserDataController.usermirrorsettings)

  app.post('/userpics',
    UserDataController.userpics)

  app.post('/useremail',
    UserDataController.useremail)

  app.post('/username',
    UserDataController.username)

  app.post('/userName',
    UserDataController.userName)

}
