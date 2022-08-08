const express = require("express");
const cors = require("cors");

const app = express();

const AnimeRoutes = require("./routes/animes.route");

app.use(cors());
app.use(express.json());

app.use("/animes", AnimeRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
