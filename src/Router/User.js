import express from "express"
import { getUser, getOneUser, insertUser, updateUser, deleteUser } from "../Controllers/Users"
// import user from "../Models/Db/Users/User.Model"

const router = express.Router()

router.get("/user", async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.description = 'get all user'
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

    const resp = await getUser(search_val, page, per_page, sort_field, sort_order)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.get("/user/:id", async (req, res) => {
  /*
    #swagger.tags = ['User']
    #swagger.description = 'get user by id'
  */

  const { id } = req.params
  try {
    const resp = await getOneUser(id)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.post("/user", async (req, res) => {
  /*
  #swagger.tags = ['User']
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
    const resp = await insertUser(req.body)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }

  // const { email, name, password } = req.body
})
router.patch("/user/:id", async (req, res) => {
  /*
  #swagger.tags = ['User']
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
    const resp = await updateUser(id, req.body)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.delete("/user/:id", async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.description = 'delete user'
*/

  const { id } = req.params
  try {
    const resp = await deleteUser(id)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }

  // try {
  //   mysql_connection.query("delete from users where id  = ?", [id], (err, results, fields) => {
  //     if (err) {
  //       console.log("error while delete user into database: ", err)
  //       return res.status(400).send()
  //     }
  //     if (results.affectedRows === 0) {
  //       return res.status(404).json({ message: "no user with that id!" })
  //     }
  //     return res.status(200).json({ message: "user deleted successfully!" })
  //   })
  // } catch (error) {
  //   console.log(error)
  //   return res.status(500).send()
  // }
})

export default router
