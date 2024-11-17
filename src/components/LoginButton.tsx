// components/LoginButton.tsx
import React from "react";
import { getAuthUrl } from "../utils/auth"; // Correct import path

const LoginButton = () => {
  // Function to handle login button click
  const handleLoginClick = () => {
    console.log("login button clicked");
    const authUrl = getAuthUrl(); // Generate the auth URL
    console.log("generated auth URL", authUrl);
    window.location.href = authUrl; // Redirect user to Spotify login page
  };

  return (
    <button onClick={handleLoginClick} className="bg-green-500 text-white py-2 px-4 rounded">
      Log in with Spotify
    </button>
  );
};

export default LoginButton;
