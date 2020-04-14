const { users } = require('../models')
const { usersParams } = require('../models')

const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user,config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // REGISTER SECTION
  async register (req, res) {
    try {
      const username = req.body.username
      const email = req.body.email
      const password = req.body.password
      uid = null

      const luser = await users.create({ label: username, hashedPassword: password })
      uid = luser.id
      await usersParams.create({ user_id: uid, parameter_name: 'email', parameter_value: email })
      // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
      res.send(luser.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This user account is already in use!' + err
      })
    }
  },

  // LOGIN SECTION
  async login (req,res) {
    try {
      const {username, password} = req.body
      console.log(username)
      console.log(password)
      const user = await users.findOne({
        where: {
          label: username
        }
      })

      console.log("user found: "+user.label)

      if (!user) {
        return res.status(403).send({
          error: "Login wasn't successfull."
        })
      }

      console.log(user.toString())
      const isPasswordValid = await user.comparePassword(password)
      console.log("pw status: "+isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Login wasn't successfull."
        })
      }

      const userJSON = user.toJSON()
      res.send({
        user:userJSON,
        token: jwtSignUser(userJSON)
      })

      res.send(user.toJSON())
    } catch (err) {
      res.status(500).send({
        error: "Something went wrong."+err
      })
    }
  }
}
