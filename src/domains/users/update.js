import user from "../../models/users/user.model"
import * as R from "ramda"
import { findAndUpdate } from "../../utils/domains"
import response from "../../response/basic"

export default async function updateUser(id = null, data) {
  try {
    if (!R.isNil(id)) {
      const resp = await findAndUpdate(
        user,
        {
          where: {
            id: id,
          },
        },
        data,
      )
      return resp
    } else {
      return response.FIELD_IS_REQUIRED("id is required!")
    }
  } catch (error) {
    return response.INTERNAL_SERVER(error)
  }
}
