import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();

const app = express();
const sql = postgres(process.env.DATABASE_URL);

app.use(express.json());
app.use(cors());

app.get("/api/users/all", async (req, res) => {
  const userData = await sql`SELECT * FROM users;`;

  res.status(200).json({ userData });
});

app.get("/api/users/all", async (req, res) => {
  const userData = await sql`SELECT * FROM users;`;

  res.status(200).json({ userData });
});

app.get("/api/users/all", async (req, res) => {
  const userData = await sql`SELECT * FROM users;`;

  res.status(200).json({ userData });
});

app.get("/api/users/all", async (req, res) => {
  const userData = await sql`SELECT * FROM users;`;

  res.status(200).json({ userData });
});

app.get("/api/users/all", async (req, res) => {
  const userData = await sql`SELECT * FROM users;`;

  res.status(200).json({ userData });
});

app.listen(3000, () => {
  console.log("LISTENING");
});
