import * as R from "ramda"
import album_model from "../../models/album.model"
import { FindAndCreate } from "../../utils/domains"

export default async function InsertAlbum(data) {
  try {
    const resp = await FindAndCreate({
      model: album_model,
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
