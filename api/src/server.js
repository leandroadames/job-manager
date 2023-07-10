import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log(process.env.DATABASE_URL);

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
