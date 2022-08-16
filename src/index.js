const express = require("express");
const cors = require("cors");
const AnimeRoutes = require("./routes/animes.route");
const { mongoConnect } = require("./database/mongoDb/mongo");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./docs/swagger.json");
const autoSwaggerDoc = require("../swagger_output.json");

const app = express();

app.use(cors());
app.use(express.json());

mongoConnect();

app.use("/api/docs", swaggerUi.serve);
app.get("/api/docs", swaggerUi.setup(swaggerDoc));
app.use("/animes", AnimeRoutes);

app.listen(process.env.PORT ?? 3000, () => {
  console.log("http://localhost:3000");
});
