// pages/Callback.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromUrl, storeToken } from "../utils/auth";

const Callback = ({ setAccessToken }: { setAccessToken: React.Dispatch<React.SetStateAction<string>> }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("spotify_token");

    if (token) {
      // If a token is already in localStorage, navigate to /app directly
      setAccessToken(token); // Ensure state is updated with token
      navigate("/app");
      return; // Exit the effect if token is already present
    }

    const hash = getTokenFromUrl();
    const accessToken = hash.access_token;
    const expiresIn = parseInt(hash.expires_in || "3600");

    if (accessToken) {
      // Store the token in localStorage and in the app state
      storeToken(accessToken, expiresIn);
      setAccessToken(accessToken); // Update the state with the new token
      navigate("/app"); // Navigate to /app after successful authentication
    } else {
      navigate("/"); // If no token found, redirect to login page
    }
  }, [navigate, setAccessToken]);

  return <div>Authenticating...</div>;
};

export default Callback;
