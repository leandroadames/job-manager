import React, { useState, useEffect } from 'react';
import UploadFile from './Upload';
import Modal, { setAppElement } from 'react-modal'

export default function StudentComponents({}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
      Modal,setAppElement('#root');
    }, []);

    const handleUploadButtonClick = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen pt-4">
      <div className="p-2 mb-4 h-28 w-1/2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded relative">
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
        <UploadFile isOpen={modalIsOpen} onClose={closeModal} />
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Resume
        </p>
      </div>
      <div className="p-2 mb-4 h-28 w-1/2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded relative">
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
        <UploadFile isOpen={modalIsOpen} onClose={closeModal} />
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Cover Letter
        </p>
      </div>
      <div className="p-2 mb-4 h-28 w-1/2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded relative">
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
        <UploadFile isOpen={modalIsOpen} onClose={closeModal} />
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Personal Narrative
        </p>
      </div>
      <div className="p-2 mb-4 h-28 w-1/2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded relative">
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
        <UploadFile isOpen={modalIsOpen} onClose={closeModal} />
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          LinkedIn
        </p>
      </div>
    </div>
  );
}
