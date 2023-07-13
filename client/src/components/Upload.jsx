import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';

export default function UploadFile({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-start h-12">
          <div className="flex rounded justify-center items-center bg-gray-900 w-full h-12">
            <span className="text-white text-lg">Upload</span>
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="text-3xl font-bold mb-4">Add File</span>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                    console.log("Hello");
                }}>
                <FaPlus className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-12">
          <button className="block hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}
