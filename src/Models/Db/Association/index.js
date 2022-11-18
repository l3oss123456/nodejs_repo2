import albumModel from "../Albums/Albums.Model"
import userModel from "../Users/User.Model"

userModel.hasMany(albumModel, {
  foreignKey: `id`,
  sourceKey: `album_id`,
})
albumModel.belongsTo(userModel, {
  foreignKey: `id`,
})
