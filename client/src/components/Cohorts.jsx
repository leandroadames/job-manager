import React from "react";

export default function Cohorts() {
  return (
    <div className="flex bg-gray-400 justify-center h-screen">
      <div className="mr-20 w-64 h-20 border border-black mt-2 rounded-lg text-center">
        Your Cohorts
      </div>
      <div className="w-2/3 h-auto border border-black mt-2 rounded-lg items-center">
        <div className="border border-black mt-2 rounded-lg h-20 flex justify-between items-center">
          <span className="mr-auto">student 1</span>

          <button className="border border-black rounded-md">View</button>
        </div>
        <div className="border border-black mt-2 rounded-md h-20 flex justify-between items-center">
          <span className="mr-auto">student 2</span>
          <button className="border border-black rounded-md">View</button>
        </div>
        <div className="border border-black mt-2 rounded-md h-20 flex justify-between items-center">
          <span className="mr-auto">student 3</span>
          <button className="border border-black rounded-md">View</button>
        </div>
        <div className="border border-black mt-2 rounded-md h-20 flex justify-between items-center">
          <span className="mr-auto">student 4</span>
          <button className="border border-black rounded-md">View</button>
        </div>
      </div>
    </div>
  );
}
