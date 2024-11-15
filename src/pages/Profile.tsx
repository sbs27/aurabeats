// src/pages/Profile.tsx

import React, { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton'; 
const Profile = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('spotify_token');
    
    if (token) {
      // Fetch user data from Spotify
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => setUserData(data)) // Store user data in state
        .catch(error => console.error('Error fetching data:', error));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-8">Your Spotify Profile</h1>

      {/* Conditionally render user data */}
      {userData ? (
        <div>
          <h2>Welcome, {userData.display_name}</h2>
          <img src={userData.images[0]?.url} alt="Profile" width={100} />
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  );
};

export default Profile;
