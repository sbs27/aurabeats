// utils/auth.ts

// Get token from URL hash
export const getTokenFromUrl = (): { [key: string]: string } => {
  const hash = window.location.hash.substring(1);
  return hash
    .split("&")
    .reduce((acc, item) => {
      const [key, value] = item.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {} as { [key: string]: string });
};

// Check if a token is expired
export const isTokenExpired = (): boolean => {
  const token = localStorage.getItem("spotify_token");
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (e) {
    console.error("Error parsing token:", e);
    return true;
  }
};

// Store the token and its expiry in localStorage
export const storeToken = (token: string, expiresIn: number): void => {
  const expirationTime = Date.now() + expiresIn * 1000;  // Calculate expiration time in milliseconds
  localStorage.setItem("spotify_token", token);  // Store token
  localStorage.setItem("spotify_token_expiry", expirationTime.toString());  // Store expiration time
};

// Get the token from localStorage
export const getToken = (): string | null => {
  const token = localStorage.getItem("spotify_token");
  const expirationTime = localStorage.getItem("spotify_token_expiry");

  if (!token || !expirationTime || Date.now() > parseInt(expirationTime)) {
    return null;  // Token is either not found or expired
  }
  return token;
};

// Generate the Spotify Auth URL
export const getAuthUrl = (): string => {
  const clientId = "4775482afb5247508d383db57658713b"; // Replace with real client ID
  const redirectUri = "http://localhost:3000/callback"; // Match this to your Spotify app settings
  const scopes = ["user-read-private", "user-read-email"];

  const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes.join(
    "%20"
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  console.log("Generated Auth URL:", authUrl); // Debugging line
  return authUrl;
};