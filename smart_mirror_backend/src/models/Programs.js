module.exports = (sequelize, DataTypes) =>
  sequelize.define('programs', {
    name: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
    }
  })
