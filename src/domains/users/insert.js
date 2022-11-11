import user from "../../models/users/user.model"
import * as R from "ramda"
import { findAndCreate } from "../../utils/domains"
import response from "../../response/basic"

export default async function insertUser(data) {
  try {
    const resp = await findAndCreate(
      user,
      {
        where: {
          email: data.email,
        },
      },
      data,
    )
    return resp
  } catch (error) {
    return response.INTERNAL_SERVER(error)
  }
}

// import * as R from "ramda"
// import repo from "../../models/users/user.model"
// import { findOrCreate } from "../../utils/domains"

// export default async function addUser(data) {
//   const resp = await findOrCreate(repo, {}, data)
//   const list = resp.map((item) => {
//     const itemObj = item.toObject()
//     return R.omit(["_id", "__v"], itemObj)
//   })
//   return list
// }
