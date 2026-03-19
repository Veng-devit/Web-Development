import { useState } from "react";

const CounterControls = ({ onAdd, onReset }) => (
  <div className="flex gap-2">
    <button onClick={onAdd} className="bg-blue-100 p-2">Add +1</button>
    <button onClick={onReset} className="bg-red-100 p-2">Reset</button>
  </div>
);

function App() {
  const [stats, setStats] = useState({ clicks: 0, lastUpdated: "" });

  const updateStats = (newClicks) => {
    const newData = { clicks: newClicks, lastUpdated: new Date().toLocaleTimeString() };
    setStats(newData);
    localStorage.setItem("stats", JSON.stringify(newData));
  };

  return (
    <div className="p-18">
      <h3>Clicks: {stats.clicks} | Last: {stats.lastUpdated}</h3>
      <CounterControls
        onAdd={() => updateStats(stats.clicks + 1)}
        onReset={() => updateStats(0)}
      />
    </div>
  );
}

export default App;