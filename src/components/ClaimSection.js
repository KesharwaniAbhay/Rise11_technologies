import React from "react";
import '../mediaQuery/ClaimSection.css'; // Make sure to import the CSS file
import { LuBaggageClaim } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const ClaimSection = () => {
  return (
    <div className="claim-section">
      <h2>File your Claim <span className="small-text">(Approx 5 Minutes)</span></h2>

      <div className="form-grid">
        {/* Contract Value Section */}
        <div className="form-group horizontal-group">
        <label htmlFor="contractValue" className="largername"><LuBaggageClaim /> Claim Value</label>
          <p>Contract Value</p>
          <div className="input-with-currency">
            <input type="number" id="contractValue" placeholder="10,00,00" />
            <select id="currency" className="currency-dropdown">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <span><p>Claim Value</p></span>
          <div className="input-with-currency">
            <input type="number" id="claimValue" placeholder="15,00,00" />
            <select id="currency" className="currency-dropdown">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <span className="small-text">150% contract value</span>
        </div>


        {/* Place Section */}
        <div className="form-group">
          <label htmlFor="place" className="largername"><FaHome /> Place</label>
          <input type="text" id="place" placeholder="Enter the place for proceedings" />
          <br />
          <label>Is the place for the proceedings the one mentioned in the agreement?</label>
          <div className="radio-buttons">
            <label>
              <input type="radio" name="placeConfirmation" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="placeConfirmation" value="no" /> No
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div className="form-group">
          <label htmlFor="language" className="largername"><IoLanguageSharp /> Language</label>
          <input type="text" id="language" placeholder="Enter the language for proceedings" />
          <br />
          <label>Is the language for the proceedings the one mentioned in the agreement?</label>
          <div className="radio-buttons">
            <label>
              <input type="radio" name="languageConfirmation" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="languageConfirmation" value="no" /> No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimSection;
