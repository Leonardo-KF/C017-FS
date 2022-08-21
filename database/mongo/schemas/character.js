import mongo from "mongoose";
const { model, Schema } = mongo;

export const characterSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const characterDb = model("Character", characterSchema);
