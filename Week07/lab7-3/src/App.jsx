
import { useState } from 'react';
import './App.css'

const Rating = ({ currentStars, onUpdate}) => (
  <div>
    <p>Current Rating: {currentStars} ⭐</p>
    <button onClick={()=> onUpdate(5)}>Rate 5 stars</button>
  </div>
);
function App() {
  const [movie, setMovie] = useState({ title: "Inception", stars: 0});
  const handleScoreUpdate = (newStars) => {
    const updateMovie = {...movie, stars: newStars};
    setMovie(updateMovie);
    localStorage.setItem("movie", JSON.stringify(updateMovie));

  }
  return(
    <div className='p-10 border shadow-lg'>
       <h1>{movie.title}</h1>
       <Rating currentStars={movie.stars} onUpdate={handleScoreUpdate}/>
    </div>
  );
}

export default App
