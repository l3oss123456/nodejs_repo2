import { Router } from "express"
import user from "./User"
import album from "./Album"

const rootRouter = Router()

rootRouter.use(user)
rootRouter.use(album)

export default rootRouter
