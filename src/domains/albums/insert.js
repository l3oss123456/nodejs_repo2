import * as R from "ramda"
import model from "../../models/albums/albums.model"
import { findAndCreate } from "../../utils/domains"

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
