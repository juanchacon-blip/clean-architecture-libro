import dot from "dotenv";
dot.config();

import app from "./app.js";
import { connectMongo } from "./infrastructure/database/mongo.js";

const PORT = process.env.PORT || 3000;

await connectMongo();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
