import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const location = useLocation();
  const [username, setUsername] = useState("Guest"); // Default username
  const [theme, setTheme] = useState("light"); // Default theme
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown state
  const [marks, setMarks] = useState({
    math: "",
    physics: "",
    chemistry: "",
  });
  const [cutoff, setCutoff] = useState(null);

  // Set username from login
  useEffect(() => {
    if (location.state && location.state.username) {
      setUsername(location.state.username);
    }
  }, [location.state]);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle cutoff calculation
  const calculateCutoff = () => {
    const { math, physics, chemistry } = marks;
    if (math && physics && chemistry) {
      const cutoffValue =
        parseFloat(math) + parseFloat(physics) / 2 + parseFloat(chemistry) / 2;
      setCutoff(cutoffValue.toFixed(2));
    } else {
      setCutoff("Please enter all marks!");
    }
  };

  // Handle input change for marks
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      {/* Profile Button */}
      <div className="profile-button-wrapper">
        <div
          className="profile-button"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          ⚙
        </div>
        {profileOpen && (
          <div className="profile-dropdown">
            <h3>{username}'s Settings</h3>
            <button onClick={toggleTheme} className="dropdown-button">
              Toggle {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            <button className="dropdown-button">Change Password</button>
            <button className="dropdown-button">Change Profile Picture</button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="profile-card">
          <h2>Welcome, {username}</h2>
        </div>

        <div className="calculator-card">
          <h3>TNEA Cutoff Calculator</h3>
          <div className="input-group">
            <label>Mathematics:</label>
            <input
              type="number"
              name="math"
              value={marks.math}
              onChange={handleInputChange}
              placeholder="Enter Math marks"
            />
          </div>
          <div className="input-group">
            <label>Physics:</label>
            <input
              type="number"
              name="physics"
              value={marks.physics}
              onChange={handleInputChange}
              placeholder="Enter Physics marks"
            />
          </div>
          <div className="input-group">
            <label>Chemistry:</label>
            <input
              type="number"
              name="chemistry"
              value={marks.chemistry}
              onChange={handleInputChange}
              placeholder="Enter Chemistry marks"
            />
          </div>
          <button onClick={calculateCutoff} className="calculate-button">
            Calculate Cutoff
          </button>

          {cutoff && (
            <div className="cutoff-result">
              <h4>Your TNEA Cutoff is: {cutoff}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
