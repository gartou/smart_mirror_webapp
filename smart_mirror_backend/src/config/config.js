module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'datable',
    user: process.env.DB_USER || 'mirror',
    password: process.env.DB_PASSWORD || 'mirror',
    options: {
      dialect: process.env.DIALECT || 'mariadb',
      host: process.env.HOST || 'cst04.ddns.net',
      port: 44444
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
