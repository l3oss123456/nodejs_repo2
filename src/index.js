import express from "express"
import cors from "cors"
import fs from "fs"
import "./configs/connection/sequelize"
import "./models/association"
import InitialRoute from "./routes"
import config from "./configs"

const app = express()
app.use(cors())
app.use(express.json())
InitialRoute(app)

app.listen(config.port, () => {
  console.log(`Server is running on port : ${config.port}`)
})
