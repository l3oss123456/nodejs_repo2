import { JwtEncode } from "../../Utils/Domains"

export default async function Login(username = "", password = "") {
  return JwtEncode({
    data: {
      username: username,
      password: password,
      iat: Math.floor(Date.now() / 1000) - 30,
    },
  })
}
