import "dotenv/config"

export default {
  port: process.env.PORT || 8000,

  //========== db connection config ============
  db_host: process.env.DB_HOST || `localhost`,
  db_username: process.env.DB_USERNAME || `root`,
  db_password: process.env.DB_PASSWORD || `root`,
  db_name: process.env.DB_NAME || `mysql_nodejs`,
  db_port: process.env.DB_PORT || 8889,
  //=============================================

  //========== token ============
  token_secret_key:
    process.env.TOKEN_SECRET_KEY || require("crypto").randomBytes(64).toString("hex"),
  //=============================================
}
