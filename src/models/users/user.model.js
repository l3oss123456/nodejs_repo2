import mongoose from "mongoose"

const schemaDefinition = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  role: { type: String, enum: ["admin", "subscriber"] },
})
export default mongoose.model("users", schemaDefinition)
