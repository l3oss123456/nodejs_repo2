import { Op } from "sequelize"
import * as R from "ramda"
import user from "../../models/users/user.model"
import { findOne } from "../../utils/domains"

export default async function getOneUser(id = null, search_val = "", page = 1, per_page = 1) {
  try {
    const resp = await findOne({
      model: user,
      filter: {
        where: {
          id: id,
        },
      },
      page,
      per_page,
    })
    return resp
  } catch (error) {
    return error
  }
}
