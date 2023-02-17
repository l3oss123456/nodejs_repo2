import fs from "fs"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../Docs/Swagger/swaggerOutput.json"

const InitialRoute = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  const routes_directory = require("path").resolve(__dirname) + "/"
  fs.readdirSync(routes_directory).forEach(async (route_file) => {
    try {
      if (route_file !== "index.js") app.use(require(routes_directory + route_file))
    } catch (error) {
      console.log(`Encountered Error initializing routes from ${route_file}`)
      console.log(error)
    }
  })
}
export default InitialRoute
