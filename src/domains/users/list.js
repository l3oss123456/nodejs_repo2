import * as R from "ramda"
import repo from "../../models/users/user.model"
import { findOneOrFindAll } from "../../utils/domains"

export default async function listUser() {
  const resp = await findOneOrFindAll(repo)
  const list = resp.map((item) => {
    const itemObj = item.toObject()
    return R.omit(["_id", "__v"], itemObj)
  })
  return list
}
