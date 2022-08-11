const express = require("express");
const cors = require("cors");
const AnimeRoutes = require("./routes/animes.route");
const { mongoConnect } = require("./database/mongoDb/mongo");

const app = express();

app.use(cors());
app.use(express.json());

mongoConnect();

app.use("/animes", AnimeRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
