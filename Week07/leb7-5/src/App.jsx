
import './App.css'

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const handleSubmit = (e) => {
    // GAP 1: Stop the browser from refreshing
    e.preventDefault();

    // GAP 2: Save the current formData object to Local Storage
    localStorage.setItem("session", JSON.stringify(formData));
    alert("Data Saved to Local Storage!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit" className="bg-black text-white p-2">Save Session</button>
    </form>
  );
}

export default App
