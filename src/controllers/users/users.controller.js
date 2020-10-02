import { HttpMethod, route } from "koa-decorator"
import { listUser } from "../../domains/users/index"

@route("/users")
class User {
  @route("/", HttpMethod.GET)
  async getUser(ctx) {
    const resp = await listUser()
    ctx.body = resp
  }
}
export default User
