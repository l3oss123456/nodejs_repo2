import express from "express"
import { getUser, getOneUser, insertUser, updateUser, deleteUser } from "../Controllers/Users"
import response from "../Response/Basic"

const router = express.Router()

router.get("/user", async (req, res) => {
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
*/

  try {
    const { search_val, page, per_page, sort_field, sort_order } = req.query

    const ret = await getUser(search_val, page, per_page, sort_field, sort_order)
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
router.get("/user/:id", async (req, res) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'get user by id'
    #swagger.description = 'get user by id'
  */

  const { id } = req.params
  try {
    const ret = await getOneUser(id)
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
router.post("/user", async (req, res) => {
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
*/

  // const { email, name, password } = req.body

  try {
    const ret = await insertUser(req.body)

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
router.patch("/user/:id", async (req, res) => {
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
*/

  const { id } = req.params

  try {
    const ret = await updateUser(id, req.body)

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
router.delete("/user/:id", async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.summary = 'delete user'
  #swagger.description = 'delete user'
*/

  const { id } = req.params
  try {
    const ret = await deleteUser(id)
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
