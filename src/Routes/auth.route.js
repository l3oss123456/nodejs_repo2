import express from "express"
import { Login } from "../controllers/auth"

const router = express.Router()

router.post("/login", async (req, res) => {
  /*
    #swagger.tags = ['Login']
    #swagger.summary = 'login'
    #swagger.description = 'login'
    #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/definitions/login" },
                    },
                }
    }
  */
  const { username, password } = req.body
  const token = await Login(username, password)
  res.send({ token })
})

module.exports = router
