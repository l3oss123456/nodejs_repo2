import { Op } from "sequelize"
import * as R from "ramda"
import user_model from "../../models/user.model"
import album_model from "../../models/album.model"
import { FindAll } from "../../utils/domains"

export default async function GetUser(
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
        model: album_model,
      },
    ]

    const resp = await FindAll({
      model: user_model,
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
    return {
      status: -1,
      result: error,
    }
  }
}
