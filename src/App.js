import React from "react";
import Progressbar from "./components/Progressbar";
import Sidebar from "./components/Sidebar";
import UploadSection from "./components/Uploadsection";
import ClaimSection from "./components/ClaimSection";
import "./App.css";

function App() {
  return (
    <div className="main">
        <div className="app-container">
        <Sidebar />
      <div className="main-content">
        <div className="progress-bar">
          <Progressbar />
        </div>
        <div className="content-sections">
          <ClaimSection />
          <UploadSection />
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default App;
