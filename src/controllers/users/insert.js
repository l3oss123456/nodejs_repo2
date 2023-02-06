import * as R from "ramda"
import user_model from "../../models/user.model"
import { FindAndCreate } from "../../utils/domains"

export default async function InsertUser(data) {
  try {
    const resp = await FindAndCreate({
      model: user_model,
      filter: {
        where: {
          email: data.email,
        },
      },
      data: data,
    })
    return resp
  } catch (error) {
    return error
  }
}
