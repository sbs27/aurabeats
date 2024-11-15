import React from 'react';
import { getAuthUrl } from '../utils/auth';  // Import your getAuthUrl function

const LoginButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = getAuthUrl();  // This triggers the redirect to Spotify
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-500 text-white p-4 rounded"
    >
      Login with Spotify
    </button>
  );
};

export default LoginButton;

