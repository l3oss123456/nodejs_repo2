import response from "../response/basic"
import * as R from "ramda"

export const countDocs = async (model, filter) => {
  return await model.count(filter)
}

export const findOneOrFindAll = async (model, filter, page, per_page) => {
  const obj = await model.findAll({
    ...filter,
    offset: parseInt(page) - 1,
    limit: parseInt(per_page),
  })
  if (R.isEmpty(obj)) {
    return response.NOT_FOUND()
    // throw response.NOT_FOUND({ model: model, ...filter })
  }
  return response.OK({
    data: obj,
    page: parseInt(page),
    per_page: parseInt(per_page),
    total: await countDocs(model, filter),
  })
}
export const findAndCreate = async (model, filter, data) => {
  let obj = await model.findOne(filter)
  if (obj) {
    return response.ALREADY_EXIST()
  }
  obj = await model.create(data)
  return response.OK()
}
export const findAndUpdate = async (model, filter, data) => {
  let obj = await model.findOne(filter)
  if (!obj) {
    return response.NOT_FOUND()
  }
  obj = await model.update(data, filter)
  return response.OK()
}
export const findAndDelete = async (model, filter) => {
  let obj = await model.findOne(filter)
  if (!obj) {
    return response.NOT_FOUND()
  }
  obj = await model.destroy(filter)
  return response.OK()
}

// import mongoose from "mongoose"
// import response from "../errors/basic"

// export const findAndUpdateOrCreate = async (repo, filter, data) => {
//   let obj = await repo.findOne(filter)
//   if (obj) {
//     obj = await repo.update(filter, data)
//   } else {
//     obj = await repo.create(data)
//   }
//   return obj
// }
// export const findOrCreate = async (repo, filter, data) => {
//   let obj = await repo.findOne(filter)
//   if (!obj) {
//     obj = await repo.create(data)
//   }
//   return obj
// }

// export const findOneIfAlreadyExistresponse = async (repo, filter) => {
//   const obj = await repo.findOne(filter)
//   if (obj) throw response.ALREADY_EXIST({ model: repo.model.modelName, ...filter })
//   return obj
// }

// export const findOneIfNotExistresponse = async (repo, filter) => {
//   const obj = await repo.findOne(filter)
//   if (!obj) throw response.NOT_FOUND({ model: repo.model.modelName, ...filter })
//   return obj
// }

// export const findOneOrFindAll = async (repo, filter) => {
//   const obj = await repo.find(filter)
//   return obj
// }

// export const checkUpdate = async (repo, filter, data) => {
//   const obj = await repo.update(filter, data, { new: true })
//   if (!obj) throw response.NOT_FOUND({ model: repo.model.modelName, ...filter })
//   return obj
// }

// export const checkDelete = async (repo, filter) => {
//   const obj = await repo.deleteOne(filter)
//   if (!obj) throw response.NOT_FOUND({ model: repo.model.modelName, ...filter })
//   return obj
// }
