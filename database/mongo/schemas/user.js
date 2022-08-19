import { model, Schema } from "mongoose";
import { characterDb } from "./character";

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  characters: { type: [characterDb], required: true },
});

export const userDb = model("User", userSchema);
