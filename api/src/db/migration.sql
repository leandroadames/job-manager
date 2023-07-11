DROP TABLE IF EXISTS student_info, cohort, users;

CREATE TABLE cohort (
  id SERIAL PRIMARY KEY,
  name TEXT,
  start_date TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password TEXT,
  name TEXT,
  is_admin BOOLEAN,
  cohort_id INTEGER REFERENCES cohort(id)
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