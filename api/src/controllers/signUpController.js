import { sql } from "../server.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../.env" });

console.log(process.env.JWT_TOKEN);

export const createUser = async (req, res) => {
  try {
    const { email, password, name, is_admin } = req.body;

    // Add user to database if they don't exist check on their email
    const alreadyExists =
      await sql`SELECT email from users WHERE email = ${email};`;

    if (alreadyExists) {
      throw new Error("This account already exists, create a new one!");
    }

    // Add user if it's unique
    const addedUser = sql`INSERT INTO users(name, email, password, is_admin) VALUES(${name}, ${email}, ${password}, ${is_admin}) RETURNING *;`;

    // if a student then create then a connection to their own info table
    if (!is_admin) {
      const createStudentInfo =
        await sql`INSERT INTO student_info(user_id) VALUES(${addedUser.id})`;
    }

    const token = jwt.sign(addedUser.id, `${process.env.JWT_TOKEN}`);

    res.status(200).json({
      status: "Success",
      addedUser,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }

};
