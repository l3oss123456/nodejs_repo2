import Koa from "koa"
import bodyParser from "koa-bodyparser"
import cors from "@koa/cors"
import mongoose from "mongoose"
import { load } from "koa-decorator"
import path from "path"

import config from "./config/index"

const app = new Koa()
app.use(bodyParser())
app.use(cors())

const apiRouter = load(path.resolve(__dirname, "controllers"), ".controller.js")
app.use(apiRouter.routes())

const server = app.listen(config.PORT, () => {
  console.log(`Server is running on port : ${config.PORT}`)
})

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose.connect("mongodb://localhost:27017/users", options)

export default server
