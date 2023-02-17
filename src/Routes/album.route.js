import express from "express"
import { GetAlbum, InsertAlbum } from "../Controllers/albums"
import AuthenticateToken from "../Middlewares/authentication"

const router = express.Router()

router.get("/album", AuthenticateToken, async (req, res) => {
  /*
    #swagger.tags = ['Album']
    #swagger.description = 'get all album'
    #swagger.parameters['$ref'] = [
        '#/parameters/search_val',
        '#/parameters/sort_field',
        '#/parameters/sort_order',
        '#/parameters/page', 
        '#/parameters/per_page',
    ]
    #swagger.security = [{"bearerAuth": []}] 
*/

  try {
    const { search_val, page, per_page, sort_field, sort_order } = req.query

    const resp = await GetAlbum(search_val, page, per_page, sort_field, sort_order)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})
router.post("/album", AuthenticateToken, async (req, res) => {
  /*
    #swagger.tags = ['Album']
    #swagger.description = 'create album'
    #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/definitions/album" },
                    },
                }
    }
    #swagger.security = [{"bearerAuth": []}] 
  */

  try {
    const resp = await InsertAlbum(req.body)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})

module.exports = router
