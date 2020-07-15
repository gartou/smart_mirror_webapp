// AUTH
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
// USER
const UserDataController = require('./controllers/UserDataController')

const multer = require('multer')
const upload = multer()

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
    UserDataController.getuserpics)

  app.post('/setuseremail',
    UserDataController.setuseremail)

  app.post('/setusername',
    UserDataController.setusername)

  app.post('/setuserfirstname',
    UserDataController.setuserFirstName)

  app.post('/setuserlastname',
    UserDataController.setuserLastName)

  app.post('/uploadimg', upload.single('file'), UserDataController.uploadImageFile)

  app.post('/getuserpics', 
    UserDataController.getuserpics)

}
