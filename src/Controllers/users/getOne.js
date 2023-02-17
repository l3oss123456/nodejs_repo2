import { Op } from "sequelize"
import * as R from "ramda"
import user_model from "../../Models/user.model"
import { FindOne } from "../../Utils/domains"
import album_model from "../../Models/album.model"

export default async function GetOneUser(id = null, search_val = "", page = 1, per_page = 1) {
  try {
    let exclude_field = []
    let join_table_statement = [
      {
        model: album_model,
      },
    ]
    const resp = await FindOne({
      model: user_model,
      filter: {
        where: {
          id: id,
        },
      },
      page,
      per_page,
      exclude_field,
      join_table_statement,
    })
    return resp
  } catch (error) {
    return error
  }
}
