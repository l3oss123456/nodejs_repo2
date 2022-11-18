import albumModel from "../Album.Model."
import userModel from "../User.Model"

userModel.hasMany(albumModel, {
  foreignKey: `id`,
  sourceKey: `album_id`,
})
albumModel.belongsTo(userModel, {
  foreignKey: `id`,
})
