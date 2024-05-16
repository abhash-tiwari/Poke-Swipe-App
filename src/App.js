import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import PokemonCard from './components/PokemonCard/PokemonCard';
import LikedPokemon from './components/LikedPokemon/LikedPokemon';
import { fetchRandomPokemon } from './api/api';
import './App.css';




const App = () => {
  const [started, setStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [likedPokemon, setLikedPokemon] = useState(() => {
    const savedLikedPokemon = localStorage.getItem('likedPokemon');
    return savedLikedPokemon ? JSON.parse(savedLikedPokemon) : [];
  });
  

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
    const updatedLikedPokemon = [...likedPokemon, pokemon];
    setLikedPokemon(updatedLikedPokemon);
    localStorage.setItem('likedPokemon', JSON.stringify(updatedLikedPokemon));
    getNextPokemon();
  };

  const handleDislike = () => {
    getNextPokemon();
  };
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
    <button onClick={toggleDarkMode} className='darkModes'>
        {darkMode ? 'Light' : 'Dark'}
      </button>
   
    {!started ? (
      <WelcomeScreen onStart={startApp} darkMode={darkMode}/>
    ) : (
      <>
        {pokemon && (
          <PokemonCard pokemon={pokemon} onLike={handleLike} onDislike={handleDislike} darkMode={darkMode}/>
        )}
        {likedPokemon.length > 0 && (
          <LikedPokemon likedPokemon={likedPokemon} darkMode={darkMode}/>
        )}
      </>
    )}
  </div>
  );
};

export default App;
