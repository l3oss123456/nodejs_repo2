import express from "express"
import { getAlbum, insertAlbum } from "../../domains/albums"
import album from "../../models/albums/albums.model"

const router = express.Router()

router.get("/album", async (req, res) => {
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
*/

  try {
    const { search_val, page, per_page, sort_field, sort_order } = req.query

    const resp = await getAlbum(search_val, page, per_page, sort_field, sort_order)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})

router.post("/album", async (req, res) => {
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
  */

  try {
    const resp = await insertAlbum(req.body)
    res.send(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
})

export default router
