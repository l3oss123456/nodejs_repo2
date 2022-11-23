import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./Swagger/SwaggerOutput.json"
import fs from "fs"
import "./Connection/Sequelize"
import "./Models/Db/Association"
import config from "./Config/index"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const routes_directory = require("path").resolve(__dirname) + `/Routes/`
fs.readdirSync(routes_directory).forEach(async (route_file) => {
  try {
    if (route_file !== "index.js") {
      app.use(require(routes_directory + route_file))
    }
  } catch (error) {
    console.log(`Encountered Error initializing routes from ${route_file}`)
    console.log(error)
  }
})

app.listen(config.port, () => {
  console.log(`Server is running on port : ${config.port}`)
})
