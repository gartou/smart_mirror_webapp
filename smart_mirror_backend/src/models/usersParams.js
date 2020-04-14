module.exports = (sequelize, DataTypes) =>
  sequelize.define('usersParams', {
    user_id: {
      type: DataTypes.STRING,
      unique: true
    },
    parameter_name: DataTypes.STRING,
    parameter_value: DataTypes.STRING
  }, {
    tableName: 'users_parameters',
    timestamps: false
  })
