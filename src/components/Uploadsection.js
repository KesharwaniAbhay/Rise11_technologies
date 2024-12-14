import React from "react";
import '../mediaQuery/UploadSection.css'; // Make sure to import the CSS file
import { MdOutlineContactPage } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";


const UploadSection = () => {
  return (
    <div className="upload-section">
      <div className="upload-grid">
        <div>
          <p className="largername"> <MdOutlineContactPage /> Statement</p>
          <div className="upload-box">
            <input className="input-upload-box" type="file" accept=".pdf" />
          </div>
        </div>

        <div>
          <p className="largername"><IoDocumentAttach /> Agreement under Disputes</p>
          <div className="upload-box">
            <input className="input-upload-box" type="file" accept=".pdf" />
          </div>
        </div>

        <div>
          <p className="largername"><IoDocuments /> Additional Documentation</p>
          <div className="upload-box">
            <input className="input-upload-box" type="file" accept=".pdf" />
          </div> 
          <div className="upload-box">
            <input className="input-upload-box" type="file" accept=".pdf" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UploadSection;
