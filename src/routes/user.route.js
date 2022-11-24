import express from "express"
import { GetUser, GetOneUser, InsertUser, UpdateUser, DeleteUser } from "../controllers/users"
import AuthenticateToken from "../middlewares/authentication"
import response from "../utils/responseHandler"

const router = express.Router()

router.get("/user", AuthenticateToken, async (req, res) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'get all user'
    #swagger.description = 'แสดงข้อมูล user ทั้งหมด'
    #swagger.parameters['$ref'] = [
      '#/parameters/search_val',
      '#/parameters/sort_field',
      '#/parameters/sort_order',
      '#/parameters/page', 
      '#/parameters/per_page',
    ]
    #swagger.security = [{"bearerAuth": []}] 
  */

  // console.log("reqreqreqreqreq;", req.route)
  // console.log(`req.headers["authorization"]`, req.headers["authorization"])

  try {
    const { search_val, page, per_page, sort_field, sort_order } = req.query

    const ret = await GetUser(search_val, page, per_page, sort_field, sort_order)
    if (ret.status <= 0) {
      res.send(
        response.GENERAL_EXCEPTION({
          code: 1000 + Math.abs(ret.status),
          description: ret.result,
        }),
      )
    }
    res.send(
      response.OK({
        result: ret.result,
      }),
    )
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.get("/user/:id", AuthenticateToken, async (req, res) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'get user by id'
    #swagger.description = 'get user by id'
    #swagger.security = [{"bearerAuth": []}] 
  */

  const { id } = req.params
  try {
    const ret = await GetOneUser(id)
    if (ret.status <= 0) {
      res.send(
        response.GENERAL_EXCEPTION({
          code: 1000 + Math.abs(ret.status),
          description: ret.result,
        }),
      )
    }

    res.send(
      response.OK({
        result: ret.result,
      }),
    )
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.post("/user", AuthenticateToken, async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.summary = 'add new user'
  #swagger.description = 'create user'
  #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: { $ref: "#/definitions/user" },
                  },
              }
  }
  #swagger.security = [{"bearerAuth": []}] 
*/

  // const { email, name, password } = req.body

  try {
    const ret = await InsertUser(req.body)

    if (ret.status <= 0) {
      res.send(
        response.GENERAL_EXCEPTION({
          code: 1000 + Math.abs(ret.status),
          description: ret.result,
        }),
      )
    }

    res.send(
      response.OK({
        result: ret.result,
      }),
    )
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }

  // const { email, name, password } = req.body
})
router.patch("/user/:id", AuthenticateToken, async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.summary = 'update user'
  #swagger.description = 'update user'
  #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                        schema: { $ref: "#/definitions/user" },
                  },
              }
  }
  #swagger.security = [{"bearerAuth": []}] 
*/

  const { id } = req.params

  try {
    const ret = await UpdateUser(id, req.body)

    if (ret.status <= 0) {
      res.send(
        response.GENERAL_EXCEPTION({
          code: 1000 + Math.abs(ret.status),
          description: ret.result,
        }),
      )
    }

    res.send(
      response.OK({
        result: ret.result,
      }),
    )
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.delete("/user/:id", AuthenticateToken, async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.summary = 'delete user'
  #swagger.description = 'delete user'
  #swagger.security = [{"bearerAuth": []}] 
*/

  const { id } = req.params
  try {
    const ret = await DeleteUser(id)
    if (ret.status <= 0) {
      res.send(
        response.GENERAL_EXCEPTION({
          code: 1000 + Math.abs(ret.status),
          description: ret.result,
        }),
      )
    }

    res.send(
      response.OK({
        result: ret.result,
      }),
    )
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})

module.exports = router
