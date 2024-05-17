import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import PokemonCard from './components/PokemonCard/PokemonCard';
import LikedPokemon from './components/LikedPokemon/LikedPokemon';
import { fetchRandomPokemon } from './api/api';
import './App.css';




const App = () => {


  // Different states
  const [started, setStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);



  // Getting darkmode/lightmode from localstorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Getting Liked Pokemon from the local storage
  const [likedPokemon, setLikedPokemon] = useState(() => {
    const savedLikedPokemon = localStorage.getItem('likedPokemon');
    return savedLikedPokemon ? JSON.parse(savedLikedPokemon) : [];
  });
  
 // Starting the App
  const startApp = () => setStarted(true);


  //Getting next Pokemon
  const getNextPokemon = async () => {
    const data = await fetchRandomPokemon();
    setPokemon(data);
  };


  //useEffect
  useEffect(() => {
    if (started) {
      getNextPokemon();
    }
  }, [started]);

  //Setting mode to Local Storage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);


  //handleLike function with setting the cards to Local Storage
  // Calling the getNextPokemon after user clicks on like or dislike
  const handleLike = () => {
    const updatedLikedPokemon = [...likedPokemon, pokemon];
    setLikedPokemon(updatedLikedPokemon);
    localStorage.setItem('likedPokemon', JSON.stringify(updatedLikedPokemon));
    getNextPokemon();
  };


  // handling dislike 
  const handleDislike = () => {
    getNextPokemon();
  };

  // Event handler for Dark mode Button
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
