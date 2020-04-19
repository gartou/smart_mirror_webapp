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
  app.post('/alluserdata',
    UserDataController.getalluserdata)

  app.post('/setusersettings',
    UserDataController.setusersettings)

  app.post('/setusermirrorsettings',
    UserDataController.setusermirrorsettings)

  app.post('/setuserpics',
    UserDataController.setuserpics)

  app.post('/setuseremail',
    UserDataController.setuseremail)

  app.post('/setusername',
    UserDataController.setusername)

  app.post('/setuserfirstname',
    UserDataController.setuserFirstName)

  app.post('/setuserlastname',
    UserDataController.setuserLastName)

}
