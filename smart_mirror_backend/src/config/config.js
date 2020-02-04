module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'smart_mirror_db',
    user: process.env.DB_USER || 'smart_mirror',
    password: process.env.DB_PASSWORD || 'smart_mirror',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  }
}
