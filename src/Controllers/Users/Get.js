import { Op } from "sequelize"
import * as R from "ramda"
import userModel from "../../Models/Db/Users/User.Model"
import albumModel from "../../Models/Db/Albums/Albums.Model"
import { findAll } from "../../Utils/Domains"

export default async function getUser(
  search_val = "",
  page = 1,
  per_page = 1,
  sort_field,
  sort_order,
) {
  try {
    let exclude_field = []
    let join_table_statement = [
      {
        model: albumModel,
      },
    ]

    const resp = await findAll({
      model: userModel,
      exclude_field: exclude_field,
      join_table_statement: join_table_statement,
      page: page,
      per_page: per_page,
      sort_field: sort_field,
      sort_order: sort_order,
      filter: {
        where: {
          [Op.or]: {
            id: {
              [Op.like]: `%${search_val}%`,
            },
            fullname: {
              [Op.like]: `%${search_val}%`,
            },
            role: {
              [Op.like]: `%${search_val}%`,
            },
            email: {
              [Op.like]: `%${search_val}%`,
            },
          },
        },
      },
    })
    return resp
  } catch (error) {
    return error
  }
}
