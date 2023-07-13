import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus }  from 'react-icons/fa'


export default function UploadFile({ isOpen, onClose }) {
  return (
         <div>
    <Modal isOpen={isOpen} onRequestClose={onClose}>
    <div className="flex justify-center items-start h-screen">
      <div className="flex rounded justify-center items-center bg-gray-900 w-16 h-8">
        <span className="text-white text-lg">Upload</span>
      </div>
    </div>
    <div className='flex justify-center items-center h-screen'>
      <div>
        <span className='text-3xl font-bold'>Add File</span>
        <div className='flex justify-center'>
          <button className='bg-gray-600'>
            <FaPlus className='h-6 w-6' />
          </button>
        </div>
      </div>
                <span>Submit</span>
                <button></button>
            </div>
    </Modal>
        </div>
  );
}
