import React from "react";

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center p-4">
        <a className="flex items-center">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blue Ocean
          </span>
        </a>

        <div className="w-full md:block md:w-auto ml-6">
          <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex">
              <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                Home
              </a>
              <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                Profile
              </a>
              <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                Documents
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
