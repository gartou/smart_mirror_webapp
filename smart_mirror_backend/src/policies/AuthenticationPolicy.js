const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema) // { error, value }

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'IDK'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address!'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Wrong password!'
          })
          break
        default:
          break
      }
    } else {
      next()
    }
  }
}
