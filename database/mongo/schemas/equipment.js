import mongoose from "mongoose";

const { Schema, model } = mongoose;

const equipmentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  armor: { type: String, required: false },
  weapon: { type: String, required: false },
  shield: { type: String, required: false },
  skill: { type: String, required: true },
});

export const equipmentDb = model("Equipment", equipmentSchema);
