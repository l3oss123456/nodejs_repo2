import albumModel from "../albums/albums.model"
import userModel from "../users/user.model"

userModel.hasOne(albumModel, {
  foreignKey: `id`,
  sourceKey: `album_id`,
})
albumModel.belongsTo(userModel, {
  foreignKey: `id`,
})
