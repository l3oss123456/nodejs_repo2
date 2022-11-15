import { Op } from "sequelize"
import * as R from "ramda"
import model from "../../models/albums/albums.model"
import { findAll } from "../../utils/domains"

export default async function getAlbum(
  search_val = "",
  page = 1,
  per_page = 1,
  sort_field,
  sort_order,
) {
  try {
    // let exclude_field = ["id"]
    let exclude_field = []
    let join_table_statement = []
    const resp = await findAll({
      model: model,
      filter: {
        where: {
          [Op.or]: {
            id: {
              [Op.like]: `%${search_val}%`,
            },
            name: {
              [Op.like]: `%${search_val}%`,
            },
            // role: {
            //   [Op.like]: `%${search_val}%`,
            // },
          },
        },
      },
      exclude_field: exclude_field,
      join_table_statement: join_table_statement,
      page: page,
      per_page: per_page,
      sort_field: sort_field,
      sort_order: sort_order,
    })
    return resp
  } catch (error) {
    return error
  }
}
