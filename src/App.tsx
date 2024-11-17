// App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoodSelector from "./components/MoodSelector";
import Callback from "./pages/Callback";
import LogoutButton from "./components/LogoutButton"; // Import LogoutButton
import LoginButton from "./components/LoginButton";

// Refactor the App component using a more concise approach
const App = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("spotify_token");
    const expiry = localStorage.getItem("spotify_token_expiry");

    if (token && expiry && Date.now() < parseInt(expiry)) {
      setAccessToken(token);
    } else {
      localStorage.removeItem("spotify_token");
      localStorage.removeItem("spotify_token_expiry");
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center py-8">
                <h1 className="text-4xl font-bold mb-4">AuraBeats</h1>
                <p className="text-lg mb-6">
                  Log in to Spotify to discover mood-based music recommendations!
                </p>
                <LoginButton />
              </div>
            }
          />

          <Route
            path="/callback"
            element={<Callback setAccessToken={setAccessToken} />}
          />

          <Route
            path="/app"
            element={
              accessToken ? (
                <div className="max-w-md mx-auto py-8">
                  <h1 className="text-4xl font-bold text-center mb-8">AuraBeats</h1>
                  <MoodSelector selectedMood="" setSelectedMood={() => {}} />
                  <LogoutButton onLogout={() => setAccessToken("")} />
                </div>
              ) : (
                <p className="text-center mt-8">Please log in first.</p>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
