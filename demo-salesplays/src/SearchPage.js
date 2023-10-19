import React from "react";
import "./SearchPage.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
 

function SearchPage() {
  console.log("Search Page")

  const navigate = useNavigate();
  
  const handleSearch = () => {
    // Your search logic here
    navigate('/results');
  }

  return (
    <div className="SearchPage">
      <header className="App-header">Sales Play GPT</header>
      <div className="search-panel">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Let's help you implement the correct Sales Play with PlaysGPT..."
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="context-header">Context</div>
        <div className="classifiers">
          <div className="classifier-column">
            <div className="classifier-item">
              <span className="classifier-title">Company Size: </span>
              <select className="classifier">
                <option value="" disabled selected>
                  Company Size
                </option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="classifier-item">
              <span className="classifier-title">Industry: </span>
              <select className="classifier">
                <option value="" disabled selected>
                  Industry
                </option>
                <option value="btech">Big Tech</option>
                <option value="consulting">Consulting</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div className="classifier-item">
              <span className="classifier-title">Deal Value:</span>
              <select className="classifier">
                <option value="" disabled selected>
                  Estimated Deal Value
                </option>
                <option value="<10k">Less than 10k</option>
                <option value="10-50k">10k-50k</option>
                <option value=">50k">More than 50k</option>
              </select>
            </div>
            {/* Add more classifier items here for the first column */}
          </div>
          <div className="classifier-column">
            <div className="classifier-item">
              <span className="classifier-title">Region: </span>
              <select className="classifier">
                <option value="" disabled selected>
                  Region
                </option>
                <option value="amer">AMER</option>
                <option value="emea">EMEA</option>
                <option value="apac">APAC</option>
              </select>
            </div>
            <div className="classifier-item">
              <span className="classifier-title">Employee number:</span>
              <select className="classifier">
                <option value="" disabled selected>
                  Employee Number
                </option>
                <option value="startup">0-20</option>
                <option value="smb">20-100</option>
                <option value="mgb">100-500</option>
              </select>
            </div>
            <div className="classifier-item">
              <span className="classifier-title">Duration Cycle:</span>
              <select className="classifier">
                <option value="" disabled selected>
                  Duration Cycle
                </option>
                <option value="q1">Create & Close</option>
                <option value="q2"> {'>'} 100 days</option>
              </select>
            </div>
            {/* Add more classifier items here for the second column */}
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default SearchPage;
