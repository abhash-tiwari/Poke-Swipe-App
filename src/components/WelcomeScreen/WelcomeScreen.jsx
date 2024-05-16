import React from 'react';
import styles from './WelcomeScreen.module.css';
import logo from "../../assets/poke.png";
import heart from "../../assets/pokeheart.png";

const WelcomeScreen = ({ onStart, darkMode }) => (
  <div className={`${styles.welcomeScreen} ${darkMode ? styles.darkMode : ''}`}>
    <img src={logo} alt="PokéAPI" className={styles.logo} />
    <div className={`${styles.card} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.heartIcon}>
        <img src={heart} alt="Heart" />
      </div>
      <h2>How to Play PokéSwipe</h2>
      <p>Pokémon Appear One at a Time</p>
      <p>Choose "Like" or "Dislike"</p>
      <p>Build Your Favorite Team</p>
      <button onClick={onStart} className={`${styles.startButton} ${darkMode ? styles.darkMode : ''}`}>Let's Go!</button>
    </div>
  </div>
);

export default WelcomeScreen;
