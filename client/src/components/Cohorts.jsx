import React, { useEffect, useState } from "react";

export default function Cohorts() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data); // Save the data in the state
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex bg-gray-400 justify-center h-screen">
      <div className="mr-20 w-64 h-20 border border-black mt-2 rounded-lg text-center">
        Your Cohorts
      </div>
      <div className="w-2/3 h-auto border border-black mt-2 rounded-lg items-center">
        {students.map(student => (
          <div
            key={student.id} // Provide a unique key for each element
            className="border border-black mt-2 rounded-lg h-20 flex justify-between items-center"
          >
            <span className="mr-auto">{student.name}</span>
            <button className="border border-black rounded-md">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

