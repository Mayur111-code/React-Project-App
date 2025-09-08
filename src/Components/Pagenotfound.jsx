import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "700", color: "#4CAF50" }}>
        404
      </h1>
      <h2 style={{ marginBottom: "20px" }}>Oops! Page Not Found</h2>
      <p style={{ maxWidth: "400px", color: "#6c757d" }}>
        The page you’re looking for doesn’t exist or has been moved.  
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-success mt-3"
        style={{
          padding: "10px 25px",
          borderRadius: "30px",
          fontWeight: "500",
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
