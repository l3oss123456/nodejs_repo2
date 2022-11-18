import response from "../Response/Basic"
import * as R from "ramda"
import { toSequelizeSortOrder } from "./Helper"
// import userModel from "../Models/Db/Users/User.Model"
// import albumModel from "../Models/Db/Albums/Albums.Model"

export const countDocs = async ({ model, filter }) => {
  return await model.count(filter)
}
export const findAll = async ({
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
    order: toSequelizeSortOrder(sort_field, sort_order),
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
      total: await countDocs({ model: model, filter: filter }),
    },
  }
}
export const findOne = async ({
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
export const findAndCreate = async ({ model, filter, data }) => {
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
export const findAndUpdate = async ({ model, filter, data }) => {
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
export const findAndDelete = async ({ model, filter }) => {
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
