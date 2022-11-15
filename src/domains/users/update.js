import user from "../../models/users/user.model"
import * as R from "ramda"
import { findAndUpdate } from "../../utils/domains"

export default async function updateUser(id = null, data) {
  try {
    if (!R.isNil(id)) {
      const resp = await findAndUpdate({
        model: user,
        filter: {
          where: {
            id: id,
          },
        },
        data: data,
      })
      return resp
    } else {
      return response.FIELD_IS_REQUIRED("id is required!")
    }
  } catch (error) {
    return error
  }
}
