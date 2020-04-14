module.exports = (sequelize, DataTypes) =>
  sequelize.define('program_parameters', {
    program_id: {
      type: DataTypes.INTEGER,
      unique: true
    },
    parameter_name: DataTypes.STRING,
    parameter_value: DataTypes.STRING
  })
