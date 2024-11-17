// pages/Profile.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth";  // Correct import path

const Profile = () => {
  const navigate = useNavigate();
  const token = getToken();

  if (!token) {
    navigate("/");  // Redirect to login if no valid token
  }

  const handleLogout = () => {
    localStorage.removeItem("spotify_token");
    localStorage.removeItem("spotify_token_expiry");
    navigate("/");  // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
