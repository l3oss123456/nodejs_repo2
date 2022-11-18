import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./Swagger/SwaggerOutput.json"
import "./Connection/Sequelize"
import "./Models/Db/Association"
import rootRouter from "./Router"
import config from "./Config/index"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(rootRouter)

app.listen(config.port, () => {
  console.log(`Server is running on port : ${config.port}`)
})
