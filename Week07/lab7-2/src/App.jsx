import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({ name: "Ronan", isOnline: false });

  const toggleStatus = () => {
    const updatedProfile = { ...profile, isOnline: !profile.isOnline };

    // GAP 1: Update React State
    setProfile(updatedProfile);

    // GAP 2: Save to Local Storage as a JSON string
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };

  return (
    <div className="p-10">
      <h2 className={profile.isOnline ? "text-green-500" : "text-gray-500"}>
        User is {profile.isOnline ? "Online" : "Offline"}
      </h2>
      <button onClick={toggleStatus} className="border p-2">
        Change Status
      </button>
    </div>
  );
}

export default App;