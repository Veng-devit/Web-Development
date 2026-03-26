import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JokeItem from './components/JokList/JokeItem';
import AsyncCounter from './components/Async/AsyncCounter';
import DeleteModal from './components/Modal/DeleteModal';
import ToggleBox from './components/ToggleBox/TobbleBox';

const JOKES = [{ id: 1, text: "Joke A" }, { id: 2, text: "Joke B" }];

function JokeList() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      {JOKES.map(j => (
        <JokeItem
          key={j.id}
          joke={j}
          isSelected={selectedId === j.id}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-800 text-gray-600">
        <Link to="/">Joke List</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/modal">Modal</Link>
        <Link to="/toggle">Toggle</Link>
      </nav>

      <Routes>
        <Route path="/" element={<JokeList />} />
        <Route path="/counter" element={<AsyncCounter />} />
        <Route path="/modal" element={<DeleteModal />} />
        <Route path="/toggle" element={<ToggleBox />} />
      </Routes>
    </BrowserRouter>
  );
}