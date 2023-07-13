import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";

// dotenv.config({ path: "../.env" });

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT;

app.get("/api/users/:name", (req, res) => {
  const { name } = req.params; // Access the parameter from req.params

  sql`SELECT *
  FROM users
  WHERE LOWER(name) LIKE LOWER(${name} || '%')
   `

    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      console.error("Error retrieving students:", error);
      res.status(500).json({ error: "Failed to retrieve students" });
    });
});

app.get("/api/cohorts", (req, res) => {
  sql`
    SELECT *
    FROM cohort
  `
    .then((result) => {
      console.log("Result:", result);
      const cohorts = result.rows;
      console.log("Cohorts:", cohorts);
      res.json(cohorts);
    })
    .catch((error) => {
      console.error("Error retrieving cohorts:", error);
      res.status(500).json({ error: "Failed to retrieve cohorts" });
    });
});

app.post("/api/cohorts", (req, res) => {
  const { cohortName, startDate, students } = req.body;
  console.log(cohortName, startDate, students);
  const newCohort = sql`
    INSERT INTO cohort (name, start_date)
    VALUES (${cohortName}, ${startDate}) RETURNING *
  `

    .then(() => {
      for (let student of students) {
        sql`UPDATE student_info SET cohort_id = ${newCohort.id} WHERE user_id = ${student.id}`;
      }
    })
    .then(() => {
      res.status(201).json({ message: "Cohort created successfully" });
    })
    .catch((error) => {
      console.error("Error creating cohort:", error);
      res.status(500).json({ error: "Failed to create cohort" });
    })
    .finally(() => {
      // Send a response to complete the request-response cycle
      res.end();
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
