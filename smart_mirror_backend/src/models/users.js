const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if(!user.changed('hashedPassword')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('hashedPassword', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    label: {
      type: DataTypes.STRING,
      unique: true
    },
    hashedPassword: DataTypes.CHAR,
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    },
    timestamps: false
  });

  users.prototype.comparePassword = function (password) {
    console.log(password)
    console.log(this.hashedPassword)
    return bcrypt.compareAsync(password, this.hashedPassword)
  }

  return users
}
