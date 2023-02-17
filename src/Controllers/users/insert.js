import * as R from "ramda"
import user_model from "../../Models/user.model"
import { FindAndCreate } from "../../Utils/domains"

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
