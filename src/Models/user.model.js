import { DataTypes } from "sequelize"
import db from "../Configs/Connection/sequelize"
import albumModel from "./album.model.js"

const modelDefinition = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "It must be a valid Email address" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "subscriber"],
      defaultValue: "subscriber",
      allowNull: false,
    },
    album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: albumModel,
        key: `id`,
      },
    },
    general_info: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("general_info"))
      },
      set: function (value) {
        this.setDataValue("general_info", JSON.stringify(value))
      },
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // deletedAt: {
    //   type: DataTypes.DATE,
    // },
  },
  {
    // timestamps: false,
    paranoid: true,
  },
)

export default modelDefinition
