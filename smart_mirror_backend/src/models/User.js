module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    label: {
      type: DataTypes.STRING,
      unique: true
    },
  })
