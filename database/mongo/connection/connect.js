import { config } from "dotenv";
import { connect } from "mongoose";
if (process.env.NODE_ENV !== "production") {
  config();
}

export class MongoDbConnection {
  async ConnectDb() {
    await connect(process.env.DATABASE_URL);
  }
}
