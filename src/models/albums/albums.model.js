import { model } from "mongoose"
import { DataTypes } from "sequelize"
import db from "../../connection/sequelize"

const modelDefinition = db.define(
  "albums",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_song: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("list_song"))
      },
      set: function (value) {
        this.setDataValue("list_song", JSON.stringify(value))
      },
    },
  },
  {
    paranoid: true,
  },
)

export default modelDefinition
