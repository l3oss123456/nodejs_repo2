import { Op } from "sequelize"
import * as R from "ramda"
import user from "../../models/users/user.model"
import { findOneOrFindAll } from "../../utils/domains"
import response from "../../response/basic"

export default async function getUser(id = null, search_val = "", page = 1, per_page = 1) {
  try {
    let resp = []
    if (R.isNil(id)) {
      resp = await findOneOrFindAll(
        user,
        {
          where: {
            [Op.or]: {
              id: {
                [Op.like]: `%${search_val}%`,
              },
              fullname: {
                [Op.like]: `%${search_val}%`,
              },
              role: {
                [Op.like]: `%${search_val}%`,
              },
            },
          },
        },
        page,
        per_page,
      )
    } else {
      resp = await findOneOrFindAll(
        user,
        {
          where: {
            id: id,
          },
        },
        page,
        per_page,
      )
    }
    return resp
  } catch (error) {
    return response.INTERNAL_SERVER(error)
  }
}

// ========================================================================

// import * as R from "ramda"
// import mysql_connection from "../../connection/mysql"

// export default async function getUser(id = "") {
//   try {
//     let query_statement = ""
//     let query_value = []

//     if (R.isEmpty(id)) {
//       query_statement = "select * from users"
//     } else {
//       query_statement = "select * from users where id = ?"
//       query_value = [...query_value, id]
//     }

//     await mysql_connection.query(query_statement, query_value, (err, results, fields) => {
//       if (err) {
//         console.log("error while insert user into database: ", err)
//         return err
//       }

//       return results
//     })
//   } catch (error) {
//     return error
//   }
// }
// ========================================================================

// import * as R from "ramda"
// import repo from "../../models/users/user.model"
// import { findOneOrFindAll } from "../../utils/domains"

// export default async function getUser() {
//   const resp = await findOneOrFindAll(repo)
//   const list = resp.map((item) => {
//     const itemObj = item.toObject()
//     return R.omit(["_id", "__v"], itemObj)
//   })
//   return list
// }
