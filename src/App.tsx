import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoodSelector from "./components/MoodSelector";
import Callback from "./pages/Callback";
import { getAuthUrl } from "./utils/auth";
import Profile from './pages/Profile'; // The new Profile page

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="text-center py-8">
                <h1 className="text-4xl font-bold mb-4">AuraBeats</h1>
                <p className="text-lg mb-6">
                  Log in to Spotify to discover mood-based music recommendations!
                </p>
                <a
                  href={getAuthUrl()}
                  className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600"
                >
                  Login with Spotify
                </a>
              </div>
            }
          />

          {/* Callback Route */}
          <Route
            path="/callback"
            element={<Callback setAccessToken={setAccessToken} />}
          />

          {/* Main App Route */}
          <Route
            path="/app"
            element={
              accessToken ? (
                <div className="max-w-md mx-auto py-8">
                  <h1 className="text-4xl font-bold text-center mb-8">AuraBeats</h1>
                  <MoodSelector
                    selectedMood=""
                    setSelectedMood={() => {}}
                  />
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
