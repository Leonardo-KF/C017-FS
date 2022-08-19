import { model, Schema } from "mongoose";

const characterSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: String, required: true },
});

export const characterDb = model("Character", characterSchema);
