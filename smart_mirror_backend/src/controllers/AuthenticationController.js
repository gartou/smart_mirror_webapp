const { users } = require('../models')
const { usersParams } = require('../models')

const jwt = require('jsonwebtoken')
const config = require('../config/config')
const crypto = require('crypto');

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
      const email_string = req.body.email
      const email_hash = crypto.createHash('md5').update(email_string).digest('hex');
      const password = req.body.password
      uid = null

      console.log(email_hash)
      const luser = await users.create({ label: email_hash, hashedPassword: password })
      uid = luser.id
      await usersParams.create({ user_id: uid, parameter_name: 'email', parameter_value: email_string })
      await usersParams.create({ user_id: uid, parameter_name: 'username', parameter_value: username})
      // const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
      res.send(luser.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Something is wrong with the registration informations.'
      })
    }
  },

  // LOGIN SECTION
  async login (req,res) {
    try {
      const {username, password} = req.body
      const userP = await usersParams.findOne({
        where: {
          parameter_name: 'username',
          parameter_value: username
        }
      })

      if (userP == null) {
        return res.status(403).send({
          error: "Login wasn't successfull!"
        })
      }

      const user = await users.findOne({
        where: {
          id: userP.user_id
        }
      })

      if (!user) {
        return res.status(403).send({
          error: "Login wasn't successfull!"
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Login wasn't successfull!"
        })
      }

      const userJSON = user.toJSON()
      const userD = await usersParams.findAll({
        where: {
          user_id: userP.user_id
        },
        raw: true
      })

      if (userD == null) {
        return res.status(403).send({
          error: "Login wasn't successfull!"
        })
      }

      userDJSON = JSON.stringify(userD)

      res.send({
        user:userJSON,
        userData:userDJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: "Something went wrong on our end!"+err
      })
    }
  }
}
