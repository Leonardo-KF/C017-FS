const express = require("express");
const cors = require("cors");
const AnimeRoutes = require("./routes/animes.route");
const connect = require("./database/mongoDb/mongo");

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use("/animes", AnimeRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
