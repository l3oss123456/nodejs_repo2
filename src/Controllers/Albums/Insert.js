import * as R from "ramda"
import model from "../../Models/Db/Albums/Albums.Model"
import { findAndCreate } from "../../Utils/Domains"

export default async function insertAlbum(data) {
  try {
    const resp = await findAndCreate({
      model: model,
      filter: {
        where: {
          name: data.name,
        },
      },
      data: data,
    })
    return resp
  } catch (error) {
    return error
  }
}
