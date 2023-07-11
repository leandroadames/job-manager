DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description TEXT
);




CREATE TABLE student_info (
  id SERIAL PRIMARY KEY,
  name TEXT,
  personal_narrative TEXT,
  course_standing TEXT,
  security_clearance TEXT,
  ed_background TEXT,
  degree_status TEXT,
  career_service_manager TEXT,
  linkedin_url TEXT,
  hunter_url TEXT,
  cohort_id INTEGER REFERENCES cohort(id),
  user_id INTEGER REFERENCES users(id)
);