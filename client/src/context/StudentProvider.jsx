import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

const StudentContext = createContext();

export function useStudents() {
  return useContext(StudentContext);
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
export default StudentProvider;
