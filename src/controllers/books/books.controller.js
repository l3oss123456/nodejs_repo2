import express from "express"

const router = express.Router()

router.get("/book", (req, res) => {
  /*
    #swagger.tags = ['Book']
  */

  // const books = req.app.db.get("books")

  res.send("books")
})
router.get("/book/:id", (req, res) => {
  /*
    #swagger.tags = ['Book']
  */

  // const book = req.app.db.get("books").find({ id: req.params.id })

  res.send(req.params.id)
})

export default router
