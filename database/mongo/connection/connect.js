import { config } from "dotenv";
import mongo from "mongoose";
const { connect } = mongo;
if (process.env.NODE_ENV !== "production") {
  config();
}

export class MongoDbConnection {
  async ConnectDb() {
    await connect(process.env.DATABASE_URL);
  }
}
