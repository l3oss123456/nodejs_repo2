import express from "express"
import { getUser, insertUser, updateUser, deleteUser } from "../../domains/users/index"
import user from "../../models/users/user.model"

const router = express.Router()

router.get("/user", async (req, res) => {
  /*
  #swagger.tags = ['User']
  #swagger.description = 'get all user'
  #swagger.parameters['$ref'] = [
    '#/parameters/search_val',
    '#/parameters/page', 
    '#/parameters/per_page'
  ]
*/

  const { search_val, page, per_page } = req.query

  const resp = await getUser(null, search_val, page, per_page)
  res.send(resp)
})
router.get("/user/:id", async (req, res) => {
  /*
    #swagger.tags = ['User']
    #swagger.description = 'get user by id'
  */

  const { id } = req.params
  try {
    const resp = await getUser(id)
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

// import { HttpMethod, route } from "koa-decorator"
// import { listUser } from "../../domains/users/index"

// @route("/users")
// class User {
//   @route("/", HttpMethod.GET)
//   async getUser(ctx) {
//     const resp = await listUser()
//     ctx.body = resp
//   }
// }
// export default User
