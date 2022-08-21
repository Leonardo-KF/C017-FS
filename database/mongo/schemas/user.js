import mongo from "mongoose";
const { model, Schema } = mongo;
import { characterSchema } from "./character.js";

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  characters: { type: [characterSchema], required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const userDb = model("User", userSchema);
