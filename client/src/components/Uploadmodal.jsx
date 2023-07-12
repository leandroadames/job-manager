import React from 'react';

export default UploadModal = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform file upload logic here
    console.log('Uploaded file:', file);
  };

  return (
    <div className="shadow-sm h-400px w-400px">
      <div></div>
      <p className="files">add file</p>
      <button className="AddFile" onClick={UploadModal()}></button>
    </div>
  );
};
