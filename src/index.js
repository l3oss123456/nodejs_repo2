import express from "express"
import cors from "cors"
// import mysql from "mysql"
import swaggerUi from "swagger-ui-express"
// import mysql_connection from "./connection/mysql"
import db from "./connection/sequelize"
import userController from "./controllers/users/users.controller"
import albumController from "./controllers/albums/albums.controller"
import swaggerDocument from "./swagger/swagger_output.json"
import "./models/association"
import config from "./config/index"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(userController)
app.use(albumController)

app.listen(config.PORT, () => {
  console.log(`Server is running on port : ${config.PORT}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import express from "express"
// import cors from "cors"
// import swaggerUi from "swagger-ui-express"
// // import swaggerDocument from "./swagger/index2"
// import swaggerDocument from "./swagger/swagger_output.json"
// import usersController from "./controllers/users/users.controller"
// import booksController from "./controllers/books/books.controller"
// import config from "./config/index"

// const app = express()

// app.listen(config.PORT, () => {
//   console.log(`Server is running on port : ${config.PORT}`)
// })
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// app.use(usersController)
// app.use(booksController)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import Koa from "koa"
// import bodyParser from "koa-bodyparser"
// import cors from "@koa/cors"
// import mongoose from "mongoose"
// import { load } from "koa-decorator"
// import path from "path"
// import SwaggerUI from "swagger-ui-express"
// import SwaggerJsDoc from "swagger-jsdoc"

// import config from "./config/index"

// const swagger_options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       description: "A simple Library API",
//     },
//     servers: [
//       {
//         url: `http://localhost:8000`,
//       },
//     ],
//     apis: ["./controllers/*.js"],
//   },
// }
// const specs = SwaggerJsDoc(swagger_options)

// const app = new Koa()
// app.use(bodyParser())
// app.use(cors())
// // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// const apiRouter = load(path.resolve(__dirname, "controllers"), ".controller.js")
// app.use(apiRouter.routes())

// const server = app.listen(config.PORT, () => {
//   console.log(`Server is running on port : ${config.PORT}`)
// })

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
// mongoose.connect("mongodb://localhost:27017/users", options)

// export default server
