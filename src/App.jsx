import React from "react";
import { Link } from "react-router";

function App() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    color: "#333",
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    borderBottom: "2px solid #3498db",
    paddingBottom: "1rem",
  };

  const linksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const linkStyle = {
    display: "block",
    padding: "1rem 1.5rem",
    backgroundColor: "#3498db",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>React Exercises Collection</h1>
      <div style={linksContainerStyle}>
        <Link to="/exComp" style={linkStyle}>
          Exercise Components
        </Link>
        <Link to="/exDemo" style={linkStyle}>
          Exercise Demo Card
        </Link>
        <Link to="/Football" style={linkStyle}>
          Football API Demo
        </Link>
      </div>
    </div>
  );
}

export default App;
