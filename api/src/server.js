import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";

// dotenv.config({ path: "../.env" });


export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
