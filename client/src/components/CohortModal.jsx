import React, { useState } from "react";
import ReactModal from "react-modal";
import AutoSearch from "./AutoSearch";
import { useStudents } from "../context/StudentProvider";

function CohortModal() {
  const { students } = useStudents();
  const [cohortName, setCohortName] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your form submission logic here
    console.log("Cohort Name:", cohortName);
    console.log("Start Date:", startDate);
    console.log("Students:", students);
  };

  return (
    <div
      style={{ width: "100%" }}
      className="flex flex-row mt-16 justify-center "
    >
      <div className="flex flex-col">
        <div className="flex justify-center items-center text-2xl font-bold mb-4 mr-12">
          New Cohort
        </div>
        <div className="flex flex-col text-black">
          <input
            className="mb-4 mr-12 w-52"
            placeholder="Cohort Name"
            value={cohortName}
            onChange={(e) => setCohortName(e.target.value)}
          />
          <input
            className="mb-4 mr-12 w-52"
            placeholder="Start Date: MM/DD/YYYY"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <AutoSearch />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center text-2xl font-bold mb-4 mr-12">
          Students
        </div>
        <div
          className="flex bg-gray-600 rounded-lg overflow-y-auto"
          style={{ width: "40vw", height: "50vh" }}
        >
          <ul className="flex-col">
            {students.map((student, index) => (
              <li className="text-xl" key={index}>
                {student}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 h-10"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CohortModal;
