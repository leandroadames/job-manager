import { sql } from "../server.js";

export const getUsers = async (req, res) => {
  const allUsers = await sql`SELECT * FROM users;`;

  res.status(200).json({
    allUsers,
  });
};
