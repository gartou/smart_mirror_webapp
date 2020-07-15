module.exports = (sequelize, DataTypes) =>
  sequelize.define('pictures', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    picture: DataTypes.BLOB
  }, {
    timestamps: false
  })
