module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    name: DataTypes.STRING,
    user_id: {
      type: DataTypes.STRING,
      unique: true
    }
  })
