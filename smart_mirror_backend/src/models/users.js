const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const argon2 = Promise.promisifyAll(require('argon2'));

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8

//   if(!user.changed('hashedPassword')) {
//     return;
//   }

//   return bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       console.log(user.toJSON())
//       console.log("hsh: "+hash)
//       user.setDataValue('hashedPassword', hash)
//     })
// }

async function hashPassword (user, options) {
  try {
    if(!user.changed('hashedPassword')) {
      return;
    }

    return argon2.hash(user.hashedPassword, {type:argon2.argon2id})
    .then(hash => {
      console.log(hash)
      user.setDataValue('hashedPassword', hash)
    })

  } catch (err) {
    console.log("Error with password hashing - "+err)
  }
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
    },
    timestamps: false
  });

  // users.prototype.comparePassword = function (password) {
  //   console.log(password)
  //   console.log(this.hashedPassword)
  //   return bcrypt.compareAsync(password, this.hashedPassword)
  // }
  users.prototype.comparePassword = async function (password) {
    try {
      if (await argon2.verify(this.hashedPassword, password)) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.log('error with comparing password - '+err)
      return false;
    }
  }

  return users
}