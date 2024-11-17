// routes/AppRouter.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Callback from "./pages/Callback";  // Correct import path
import Profile from "./pages/Profile";  // Correct import path
import LoginButton from "./components/LoginButton";  // Correct import path
import { getToken } from "./utils/auth";  // Correct import path

const AppRouter = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />  {/* Login page */}
        <Route path="/callback" element={<Callback setAccessToken={setAccessToken} />} />  {/* Pass setAccessToken to Callback */}
        <Route
          path="/app"
          element={accessToken || getToken() ? <Profile /> : <Navigate to="/" />}  
        /> {/* Conditional rendering for the profile page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

