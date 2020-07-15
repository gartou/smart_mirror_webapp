module.exports = {
  port: process.env.PORT,
  db: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      dialect: process.env.DIALECT,
      host: process.env.HOST,
      port: 44444
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
