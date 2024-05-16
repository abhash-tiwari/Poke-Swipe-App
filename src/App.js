import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import PokemonCard from './components/PokemonCard/PokemonCard';
import LikedPokemon from './components/LikedPokemon/LikedPokemon';
import { fetchRandomPokemon } from './api/api';
import './App.css';

// import './components/WelcomeScreen/WelcomeScreen.css';
// import './components/PokemonCard/PokemonCard.css';
// import './components/LikedPokemon/LikedPokemon.css';
import logo from "./assets/poke.png"
// import heart from "./assets/pokeheart.png"

const App = () => {
  const [started, setStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);
  

  const startApp = () => setStarted(true);

  const getNextPokemon = async () => {
    const data = await fetchRandomPokemon();
    setPokemon(data);
  };

  useEffect(() => {
    if (started) {
      getNextPokemon();
    }
  }, [started]);

  

  const handleLike = () => {
    setLikedPokemon([...likedPokemon, pokemon]);
    getNextPokemon();
  };

  const handleDislike = () => {
    getNextPokemon();
  };

  return (
    <div className="App">
      <img src={logo} alt="PokéAPI" className="logo" />
      <div className='darkMode'>
        <button>Dark</button>
      </div>
     
      {!started ? (
        <WelcomeScreen onStart={startApp} />
      ) : (
        <>
          {pokemon && (
            <PokemonCard pokemon={pokemon} onLike={handleLike} onDislike={handleDislike} />
          )}
          {likedPokemon.length > 0 && (
            <LikedPokemon likedPokemon={likedPokemon} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
