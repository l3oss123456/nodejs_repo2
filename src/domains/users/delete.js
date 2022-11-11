import user from "../../models/users/user.model"
import * as R from "ramda"
import { findAndDelete } from "../../utils/domains"
import response from "../../response/basic"

export default async function deleteUser(id = null) {
  try {
    if (!R.isNil(id)) {
      const resp = await findAndDelete(user, {
        where: {
          id: id,
        },
      })
      return resp
    } else {
      return response.FIELD_IS_REQUIRED("id is required!")
    }
  } catch (error) {
    return response.INTERNAL_SERVER(error)
  }
}
