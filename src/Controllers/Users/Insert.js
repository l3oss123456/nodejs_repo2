import user from "../../Models/Db/User.Model"
import * as R from "ramda"
import { findAndCreate } from "../../Utils/Domains"

export default async function insertUser(data) {
  try {
    const resp = await findAndCreate({
      model: user,
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
