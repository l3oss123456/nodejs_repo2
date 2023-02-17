import express from "express"
import cors from "cors"
import fs from "fs"
import "./Configs/Connection/sequelize"
import "./Models/Association"
import InitialRoute from "./Routes"
import config from "./Configs"

const app = express()
app.use(cors())
app.use(express.json())
InitialRoute(app)

app.listen(config.port, () => {
  console.log(`Server is running on port : ${config.port}`)
})
