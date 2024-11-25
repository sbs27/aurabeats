# AuraBeats

This application allows users to log in with their Spotify account, select a mood based on **valence** (happiness) and **energy**, and get song recommendations tailored to that mood.

---

## Features

1. **Login with Spotify**:  
   - Authenticate securely using Spotify's API.  
   - The app retrieves a token to access user data and song recommendations.  

2. **Mood Selection**:  
   - Users can choose from four predefined moods:  
     - **Happy and Energetic**: High valence, high energy.  
     - **Happy and Calm**: High valence, low energy.  
     - **Sad and Energetic**: Low valence, high energy.  
     - **Sad and Calm**: Low valence, low energy.  

3. **Personalized Song Recommendations**:  
   - Based on the selected mood, the app fetches songs that match the mood's characteristics.  

4. **User Profile Display**:  
   - After login, users can view their Spotify profile, including:  
     - Display name  
     - Email address  
     - Profile picture (if available).  

5. **Logout Option**:  
   - Users can log out to clear their session and switch accounts.  

---

## Installation

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Switch to the correct branch**:  
   Make sure you are on the `ishaan-fixes` branch:  
   ```bash
   git checkout ishaan-fixes
   ```

3. **Install dependencies**:  
   ```bash
   npm install
   ```

4. **Set up Spotify Developer App**:  
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).  
   - Create a new app and note the **Client ID**.  
   - Set the **Redirect URI** to `http://localhost:3000/callback`.  

5. **Update the configuration**:  
   - In `src/utils/auth.ts`, replace the `CLIENT_ID` and `REDIRECT_URI` with your app's values.  

6. **Start the app**:  
   ```bash
   npm start
   ```

---

## Usage

1. **Log In**:  
   - Click the "Login with Spotify" button on the home page.  
   - Authorize the app to access your Spotify account.  

2. **Select a Mood**:  
   - Choose a mood from the four available options.  

3. **Get Songs**:  
   - The app fetches songs from Spotify that match the selected mood.  

4. **View Profile**:  
   - Navigate to the profile page to view your Spotify user details.  

---

## Technical Overview

1. **Front-End**:  
   - Built with React (TypeScript).  
   - Tailwind CSS for styling.  

2. **Authentication**:  
   - OAuth 2.0 with Spotify's implicit grant flow.  

3. **APIs**:  
   - Spotify Web API to fetch user data and song recommendations.  

4. **State Management**:  
   - `useState` and `useEffect` hooks manage the app's token and fetched data.  

---

## Future Improvements

- Add more moods or allow custom mood selection.  
- Implement pagination for song recommendations.  
- Improve error handling and UI/UX.  
- Deploy the app and switch from `http://localhost:3000` to a production-ready domain.  

---

## Troubleshooting

1. **Redirect URI Mismatch**:  
   - Ensure the redirect URI in `Spotify Developer Dashboard` matches the one in `src/utils/auth.ts`.  

2. **Token Expiry**:  
   - Log out and log back in if your token expires.  

3. **CORS Issues**:  
   - Use a proxy or ensure your API calls follow Spotify's guidelines.  

---

**Note**: Kindly ensure you are on the `ishaan-fixes` branch for the latest updates and fixes.  

Enjoy discovering songs that match your mood! 🎶  
