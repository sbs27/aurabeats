import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh", // Ensure it's centered vertically and horizontally
      }}
    >
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
