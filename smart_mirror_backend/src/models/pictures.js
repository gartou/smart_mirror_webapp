module.exports = (sequelize, DataTypes) =>
  sequelize.define('pictures', {
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
    },
    picture: DataTypes.BLOB
  })
