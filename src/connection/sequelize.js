import { Sequelize } from "sequelize"
import config from "../config"

const db = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  port: config.DB_PORT,

  // pool: {
  //   max: 5,
  //   min: 1,
  //   acquire: 30000,
  //   idle: 10000,
  // },
})

db.authenticate()
  .then(() => {
    console.log("Database connected!")
  })
  .catch((err) => {
    console.log("Error: ", err)
    return
  })

export default db
