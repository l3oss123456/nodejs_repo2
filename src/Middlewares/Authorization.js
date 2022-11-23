import jwt from "jsonwebtoken"
import Config from "../Config"
// import { jwtDecode } from "../Utils/Domains"

const authenticateToken = (req, res, next) => {
  // token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY2ODc2NzQ0OH0sImlhdCI6MTY2ODc2NzQ3OCwiZXhwIjoxNjY4ODAzNDc4fQ.VqcOhzQeu5n8fKnhA-0MsJvz8xDO07142AmbJl8k-8w

  const authHeader = req.headers["authorization"]
  //   console.log("authHeaderauthHeader;", authHeader)
  const token = authHeader && authHeader.split(" ")[1]
  //   console.log("tokentokentoken;", token)

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, Config.token_secret_key, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

export default authenticateToken
