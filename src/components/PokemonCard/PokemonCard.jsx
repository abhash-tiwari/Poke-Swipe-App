import React from 'react';
import styles from './PokemonCard.module.css'; // Import the CSS file for the Pokémon card
import heart from "../../assets/pokeheart.png"

const PokemonCard = ({ pokemon, onLike, onDislike }) => {
  const { name, sprites, abilities, types } = pokemon;
  const imageUrl = sprites.other['dream_world'].front_default;

  return (
    <div className={styles.pokemonCard}>
      <div className={styles.heartIcon}>
        <img src={heart} alt="Heart" />
      </div>
      <img src={imageUrl} alt={name} className={styles.pokemonImage} />
      <h2 className={styles.pokemonName}>{name}</h2>
      <div className={styles.pokemonDetails}>
      {types.map(type => (
  <span key={type.type.name} className={`${styles.pokemonType} ${type.type.name}`}>{type.type.name}</span>
))}
        {abilities.map(ability => (
          <span key={ability.ability.name} className={styles.pokemonAbility}>{ability.ability.name}</span>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={onDislike} className={styles.dislikeButton}>Dislike</button>
        <button onClick={onLike} className={styles.likeButton}>Like</button>
      </div>
    </div>
  );
};

export default PokemonCard;
