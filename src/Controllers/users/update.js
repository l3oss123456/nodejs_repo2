import * as R from "ramda"
import user_model from "../../Models/user.model"
import { FindAndUpdate } from "../../Utils/domains"

export default async function UpdateUser(id = null, data) {
  try {
    if (!R.isNil(id)) {
      const resp = await FindAndUpdate({
        model: user_model,
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
