import * as R from "ramda"
import user_model from "../../models/user.model"
import { FindAndDelete } from "../../utils/domains"

export default async function DeleteUser(id = null) {
  try {
    if (!R.isNil(id)) {
      const resp = await FindAndDelete({
        model: user_model,
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
