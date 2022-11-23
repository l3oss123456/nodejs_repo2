import { jwtEncode } from "../../Utils/Domains"

export default async function login(username = "", password = "") {
  return jwtEncode({
    data: {
      username: username,
      password: password,
      iat: Math.floor(Date.now() / 1000) - 30,
    },
  })
}
