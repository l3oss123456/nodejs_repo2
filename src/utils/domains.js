import jwt from "jsonwebtoken"
import * as R from "ramda"
import { ToSequelizeSortOrder } from "./helpers"
import Config from "../configs"
// import userModel from "../Models/Db/Users/User.Model"
// import albumModel from "../Models/Db/Albums/Albums.Model"

export const CountDocs = async ({ model, filter }) => {
  return await model.count(filter)
}
export const FindAll = async ({
  model = null,
  filter = {},
  exclude_field = [],
  join_table_statement = [],
  page = 1,
  per_page = 10,
  sort_field = [],
  sort_order = [],
}) => {
  const obj = await model.findAll({
    ...filter,
    attributes: {
      exclude: [...exclude_field, "deletedAt"],
    },
    include: join_table_statement,
    order: ToSequelizeSortOrder(sort_field, sort_order),
    offset: parseInt(page) - 1,
    limit: parseInt(per_page),
  })
  if (R.isEmpty(obj)) {
    return {
      status: -1,
      result: `can't find data in database`,
    }
  }
  return {
    status: 1,
    result: {
      data: obj,
      page: parseInt(page),
      per_page: parseInt(per_page),
      total: await CountDocs({ model: model, filter: filter }),
    },
  }
}
export const FindOne = async ({
  model,
  filter,
  exclude_field = [],
  join_table_statement = [],
  page,
  per_page,
}) => {
  const obj = await model.findOne({
    ...filter,
    attributes: {
      exclude: [...exclude_field, "deletedAt"],
    },
    include: join_table_statement,
  })
  if (R.isEmpty(obj) || R.isNil(obj)) {
    return {
      status: -1,
      result: `can't find data in database`,
    }
  }
  return {
    status: 1,
    result: {
      data: obj,
    },
  }
}
export const FindAndCreate = async ({ model, filter, data }) => {
  let obj = await model.findOne({ ...filter })
  if (obj) {
    return {
      status: -1,
      result: "Already exist!",
    }
  }
  obj = await model.create(data)
  return {
    status: 1,
    result: "Create successfully",
  }
}
export const FindAndUpdate = async ({ model, filter, data }) => {
  let obj = await model.findOne({ ...filter })
  if (!obj) {
    return {
      status: -1,
      result: `Not found`,
    }
  }
  obj = await model.update(data, filter)
  return {
    status: 1,
    result: "Update successfully!",
  }
}
export const FindAndDelete = async ({ model, filter }) => {
  let obj = await model.findOne({ ...filter })
  if (!obj) {
    return {
      status: -1,
      result: `Not found`,
    }
  }
  obj = await model.destroy(filter)
  return {
    status: 1,
    result: "Delete successfully!",
  }
}
export const JwtEncode = ({
  data = {},
  secret_key = Config.token_secret_key,
  exp = "10h",
  algorithm = "RS256",
}) => {
  return jwt.sign(data, secret_key, { expiresIn: exp }, { algorithm: algorithm })
}
export const JwtDecode = ({ token = "", secret_key = Config.token_secret_key }) => {
  return jwt.verify(token, secret_key)
}
