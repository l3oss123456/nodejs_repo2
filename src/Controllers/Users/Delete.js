import user from "../../Models/Db/User.Model"
import * as R from "ramda"
import { findAndDelete } from "../../Utils/Domains"

export default async function deleteUser(id = null) {
  try {
    if (!R.isNil(id)) {
      const resp = await findAndDelete({
        model: user,
        filter: {
          where: {
            id: id,
          },
        },
      })
      return resp
    } else {
      return response.FIELD_IS_REQUIRED("id is required!")
    }
  } catch (error) {
    return error
  }
}
