module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    user_id: {
      type: DataTypes.STRING,
      unique: true
    },
    parameter_name: DataTypes.STRING,
    parameter_value: DataTypes.STRING
  })
