import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username] = useState(location.state?.username || "Guest User"); // Username from login
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Settings dropdown visibility
  const [isFeatureOpen, setIsFeatureOpen] = useState(false); // Features dropdown visibility
  const [theme, setTheme] = useState("light"); // Default theme
  const [currentIndex, setCurrentIndex] = useState(0); // For rotating quotes/objectives

  // Objectives and Quotes
  const rotatingTexts = [
    "Empowering students to make informed decisions.",
    "Simplifying college admissions with precision tools.",
    "Connecting learners with trending career paths.",
    "Dream big and dare to fail.",
    "The future depends on what you do today.",
    "Success is not the key to happiness. Happiness is the key to success.",
  ];

  // Automatic Sliding Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [rotatingTexts]);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle Logout
  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      {/* Left: Settings Section */}
      <div className="settings-section">
        <div
          className="profile-button-wrapper"
          onClick={() => setIsSettingsOpen(!isSettingsOpen)} // Toggle dropdown
        >
          <div className="profile-button">
            {/* Profile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14.5c3.589 0 6.5-2.911 6.5-6.5S15.589 1.5 12 1.5 5.5 4.411 5.5 8s2.911 6.5 6.5 6.5zm0 2.5c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
              />
            </svg>
          </div>
          {isSettingsOpen && (
            <div className="settings-dropdown">
              <h4 className="settings-title">{username}</h4>
              <button className="dropdown-button" onClick={toggleTheme}>
                {theme === "light" ? "Dark Theme" : "Light Theme"}
              </button>
              <button className="dropdown-button logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center: Rotating Objectives and Quotes */}
      <div className="content-section">
        <div className="rotating-text">
          <p className="styled-text">{rotatingTexts[currentIndex]}</p>
        </div>
      </div>

      {/* Right: Features Section */}
      <div className="feature-section">
        <div
          className="feature-button-wrapper"
          onClick={() => setIsFeatureOpen(!isFeatureOpen)} // Toggle features dropdown
        >
          <div className="feature-button">
            {/* Book Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="book-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 4.5v15c0 .828.895 1.5 2 1.5h16c1.105 0 2-.672 2-1.5v-15c0-.828-.895-1.5-2-1.5H4c-1.105 0-2 .672-2 1.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 3v16M20 3v16M12 3v16"
              />
            </svg>
          </div>
          {isFeatureOpen && (
            <div className="features-dropdown">
              <button className="dropdown-feature">Get Recommendations</button>
              <button className="dropdown-feature">Cutoff Calculator</button>
              <button className="dropdown-feature">Trending Courses</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
