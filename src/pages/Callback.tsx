import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromUrl } from '../utils/auth';  // Function to extract token from URL

interface CallbackProps {
  setAccessToken: (token: string) => void;
}

const Callback: React.FC<CallbackProps> = ({ setAccessToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Look for an access token in localStorage
    const token = localStorage.getItem('spotify_token');
    
    if (token) {
      // Token already exists, no need for re-authentication
      console.log("Token exists in localStorage", token);
      navigate("/app");  // Or redirect to the page you want after login
    } else {
      // Try to extract the token from the URL hash
      const hash = getTokenFromUrl();
      const newToken = hash.access_token;

      if (newToken) {
        // If a new token is found, save it to localStorage and set the access token
        setAccessToken(newToken);
        localStorage.setItem('spotify_token', newToken);  // Store the token
        console.log("New token received and stored", newToken);
        navigate("/app");
      } else {
        console.log("No token found in URL hash");
        navigate("/login");
      }
    }
  }, [navigate, setAccessToken]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl mb-8">Authenticating...</h1>
    </div>
  );
};

export default Callback;


