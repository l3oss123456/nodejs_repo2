import express from "express"
import { login } from "../Controllers/Auth"

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
  const token = await login(username, password)
  res.send({ token })
})

module.exports = router
