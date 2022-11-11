import sequelize from "sequelize"
import db from "../../connection/sequelize"

const modelDefinition = db.define(
  "users",
  {
    fullname: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "It must be a valid Email address" },
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: sequelize.ENUM,
      values: ["admin", "subscriber"],
      allowNull: false,
    },
    general_info: {
      type: sequelize.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("general_info"))
      },
      set: function (value) {
        this.setDataValue("general_info", JSON.stringify(value))
      },
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    // timestamps: false,
  },
)

export default modelDefinition

// import mongoose from "mongoose"

// const schemaDefinition = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number },
//   role: { type: String, enum: ["admin", "subscriber"] },
// })
// export default mongoose.model("users", schemaDefinition)
