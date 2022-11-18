import { Op } from "sequelize"
import * as R from "ramda"
import user from "../../Models/Db/User.Model"
import { findOne } from "../../Utils/Domains"
import albumModel from "../../Models/Db/Album.Model."

export default async function getOneUser(id = null, search_val = "", page = 1, per_page = 1) {
  try {
    let exclude_field = []
    let join_table_statement = [
      {
        model: albumModel,
      },
    ]
    const resp = await findOne({
      model: user,
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
