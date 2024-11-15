export const getAuthUrl = (): string => {
  const CLIENT_ID = "4775482afb5247508d383db57658713b"; // Your actual client ID
  const REDIRECT_URI = "http://localhost:3000/callback"; // Correct redirect URI
  const SCOPE = [
    "user-read-recently-played",
    "user-top-read",
    "playlist-modify-public",
  ].join("%20");

  // Construct the auth URL
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  console.log("Generated Auth URL:", authUrl);  // Log to ensure the URL is correct
  return authUrl;
};




export const getTokenFromUrl = (): { [key: string]: string } => {
  const token = window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [key: string]: string }, item: string) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

  console.log('Token from URL:', token);  // Log the token
  return token;
};

