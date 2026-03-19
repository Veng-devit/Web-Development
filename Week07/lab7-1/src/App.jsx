
import { useState } from 'react';
import './App.css'

function App() {
  const defaultUser = {name: "Guest", visits: 0};
  const [user, setUser] = useState(()=>{
    const saved = localStorage.getItem("user_data");
    return saved? JSON.parse(saved) : defaultUser;
  });
  return(
    <div className='p-10'>
      <h1>Welcome, {user.name}</h1>
      <p>Visits: {user.visits}</p>
    </div>
  );
}

export default App
