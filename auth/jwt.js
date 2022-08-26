import jwt from "jsonwebtoken";
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
  config();
}

export class JwtHelper {
  generateToken(data) {
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: "12h" });
    return token;
  }

  verifyToken(token) {
    const data = jwt.verify(token, process.env.SECRET);
    return data;
  }
}
