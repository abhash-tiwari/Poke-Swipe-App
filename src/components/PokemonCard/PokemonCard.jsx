import React from 'react';
import styles from './PokemonCard.module.css'; 
import heart from "../../assets/pokeheart.png";
import logo from "../../assets/poke.png";
import img from "../../assets/pikachuimg.png";



// Pokemon Card Layout
const PokemonCard = ({ pokemon, onLike, onDislike, darkMode }) => {
  const { name, sprites, abilities, types } = pokemon;
  const imageUrl = sprites.other['dream_world'].front_default;

  return (
    <div>
      <img src={logo} alt="PokéAPI" className={styles.logo} />
      <div className={`${styles.pokemonCard} ${darkMode ? styles.darkMode : ''}`}>
        <div className={styles.heartIcon}>
          <img src={heart} alt="Heart" />
        </div>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className={styles.pokemonImage} />
        ) : (
          <div className={styles.placeholder}>
            <img src={img} alt="" />
          </div>
        )}
        <h2 className={styles.pokemonName}>{name}</h2>
        <div className={styles.pokemonDetails}>
          {types.map(type => (
            <span key={type.type.name} className={`${styles.pokemonType} ${type.type.name} ${darkMode ? styles.darkMode : ''}`}>{type.type.name}</span>
          ))}
          {abilities.map(ability => (
            <span key={ability.ability.name} className={`${styles.pokemonAbility} ${darkMode ? styles.darkMode : ''}`}>{ability.ability.name}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          <button onClick={onDislike} className={` ${styles.dislikeButton}  ${darkMode ? styles.darkMode : ''}`}>Dislike</button>
          <button onClick={onLike} className={` ${styles.likeButton}  ${darkMode ? styles.darkMode : ''}`}>Like</button>
        </div>
      </div>
      
    </div>
  );
};

export default PokemonCard;
