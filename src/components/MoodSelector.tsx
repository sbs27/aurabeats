// components/MoodSelector.tsx
import React from "react";

const MoodSelector = ({ selectedMood, setSelectedMood }: { selectedMood: string; setSelectedMood: (mood: string) => void }) => {
  const moods = [
    { name: "Happy", color: "bg-yellow-400" },
    { name: "Sad", color: "bg-blue-400" },
    { name: "Energetic", color: "bg-red-400" },
    { name: "Calm", color: "bg-green-400" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Select Your Mood</h2>
      <div className="grid grid-cols-2 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelectedMood(mood.name)}
            className={`${mood.color} text-white font-medium py-2 px-4 rounded shadow-md ${
              selectedMood === mood.name ? "ring-4 ring-offset-2 ring-white" : ""
            }`}
          >
            {mood.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
