import * as R from "ramda"
import response from "../Response/Basic"

export const toSequelizeSortOrder = (sort_field, sort_order) => {
  if (R.isNil(sort_field) && R.isNil(sort_order)) {
    return []
  }
  if (R.isEmpty(sort_field) || R.isEmpty(sort_order)) {
    // throw response.BAD_REQUEST("empty form in sort_field or sort_order")
    return []
  } else {
    let order_sequence = []
    if (typeof sort_field === "string" && typeof sort_order === "string") {
      order_sequence = [
        ...order_sequence,
        [`${sort_field}`, `${parseInt(sort_order) === -1 ? "DESC" : "ASC"}`],
      ]
      return order_sequence
    } else if (
      (typeof sort_field === "string" && typeof sort_order !== "string") ||
      (typeof sort_field !== "string" && typeof sort_order === "string") ||
      (R.isNil(sort_field) && !R.isNil(sort_order)) ||
      (!R.isNil(sort_field) && R.isNil(sort_order))
    ) {
      // throw response.BAD_REQUEST(`size of sort_field and sort_order doesn't match`)
      return {}
    } else {
      if (sort_field.length === sort_order.length) {
        sort_order.forEach((order, index) => {
          const order_type = parseInt(order) === 1 ? "ASC" : "DESC"
          order_sequence = [...order_sequence, [`${sort_field[index]}`, `${order_type}`]]
        })
        return [...order_sequence]
      } else {
        // throw response.BAD_REQUEST(`size of sort_field and sort_order doesn't match`)
        return {}
      }
    }
  }
}
