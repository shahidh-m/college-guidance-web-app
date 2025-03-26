import React, { useState } from "react";
import "./AdminPage.css";

function AdminPage() {
  const [file, setFile] = useState(null); // Track uploaded file

  // Handle File Upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store selected file
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    // Handle file upload logic here
    alert(`File "${file.name}" uploaded successfully!`);
    setFile(null); // Reset file input
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="upload-section">
        <label htmlFor="fileUpload" className="upload-label">
          Upload Excel File:
        </label>
        <input
          type="file"
          id="fileUpload"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
