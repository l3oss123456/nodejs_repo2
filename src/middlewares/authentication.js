import jwt from "jsonwebtoken"
import * as R from "ramda"
import config from "../configs"
import { JwtDecode } from "../utils/domains"
import response from "../utils/responseHandler"

const AuthenticateToken = (req, res, next) => {
  const auth_header = req.headers["authorization"]
  const token = auth_header && auth_header.split(" ")[1]

  if (R.isNil(token)) return res.send(response.UNAUTHORIZED({}))

  try {
    JwtDecode({
      token: token,
    })

    next()
  } catch (error) {
    console.log(error)
    return res.send(response.FORBIDDEN({ description: error.message }))
  }
}

export default AuthenticateToken
