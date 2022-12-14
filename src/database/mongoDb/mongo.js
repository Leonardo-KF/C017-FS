if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { connect } = require("mongoose");

function mongoConnect() {
  console.log(process.env);
  connect(process.env.MONGO_URL ?? "mongodb://admin:admin@localhost:27020/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error in database: ", err);
    });
}

module.exports = { mongoConnect };
