import { Sequelize } from "sequelize"
import config from "../Config2"

const db = new Sequelize(config.db_name, config.db_username, config.db_password, {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  port: config.db_port,

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
