import mongoose from "mongoose"
import ThrowError from "../errors/basic"

export const findAndUpdateOrCreate = async (repo, filter, data) => {
  let obj = await repo.findOne(filter)
  if (obj) {
    obj = await repo.update(filter, data)
  } else {
    obj = await repo.create(data)
  }
  return obj
}
export const findOrCreate = async (repo, filter, data) => {
  let obj = await repo.findOne(filter)
  if (!obj) {
    obj = await repo.create(data)
  }
  return obj
}

export const findOneIfAlreadyExistThrowError = async (repo, filter) => {
  const obj = await repo.findOne(filter)
  if (obj) throw ThrowError.ALREADY_EXIST({ model: repo.model.modelName, ...filter })
  return obj
}

export const findOneIfNotExistThrowError = async (repo, filter) => {
  const obj = await repo.findOne(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const findOneOrFindAll = async (repo, filter) => {
  const obj = await repo.find(filter)
  return obj
}

export const checkUpdate = async (repo, filter, data) => {
  const obj = await repo.update(filter, data, { new: true })
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const checkDelete = async (repo, filter) => {
  const obj = await repo.deleteOne(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}
