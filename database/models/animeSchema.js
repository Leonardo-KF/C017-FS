const mongoose = require("mongoose");
const { Schema } = mongoose;

const animeSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  protagonist: { type: String, required: true },
  gender: { type: String, required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Anime = mongoose.model("Anime", animeSchema);

// const obj = {
//     name: "Anime",
//     title: "title"
// }

module.exports = Anime;
