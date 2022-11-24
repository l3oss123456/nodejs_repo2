import albumModel from "../album.model"
import userModel from "../user.model"

userModel.hasMany(albumModel, {
  foreignKey: `id`,
  sourceKey: `album_id`,
})
albumModel.belongsTo(userModel, {
  foreignKey: `id`,
})
