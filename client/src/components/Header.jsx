import React from "react";
import leftpad from "left-pad"
export default function Header() {
  return (
    <div className="fixed top-0 z-20 w-screen">
      <h2 className="text-3xl font-bold underline text-center text-red">
        Hello world!
      </h2>
    </div>
  );
}

{
  /* <divclassNameName="flex items-center bg-blue-400  top-0 z-20 w-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Blue Ocean</h2>
        <div className="flex ml-4">Profile</div>
        <div className="flex ml-4">Documents</div>
      </div>
    </div> */
}
