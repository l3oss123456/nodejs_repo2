import * as R from "ramda"

export const ToSequelizeSortOrder = (sort_field, sort_order) => {
  if (R.isNil(sort_field) && R.isNil(sort_order)) {
    return []
  }
  if (R.isEmpty(sort_field) || R.isEmpty(sort_order)) {
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
      return {}
    } else {
      if (sort_field.length === sort_order.length) {
        sort_order.forEach((order, index) => {
          const order_type = parseInt(order) === 1 ? "ASC" : "DESC"
          order_sequence = [...order_sequence, [`${sort_field[index]}`, `${order_type}`]]
        })
        return [...order_sequence]
      } else {
        return {}
      }
    }
  }
}
