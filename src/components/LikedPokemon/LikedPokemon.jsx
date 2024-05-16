import React from 'react';
import styles from "./LikedPokemon.module.css"

const LikedPokemon = ({ likedPokemon }) => (
  <div className={styles.likedPokemon}>
    <h2>Pokémon you have liked <span className="heart">❤️</span></h2>
    <div className={styles.pokemonGrid}>
      {likedPokemon.map(pokemon => (
        <div key={pokemon.id} className={styles.pokemonCard}>
          <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} className={styles.pokemonImage} />
          <h3 className={styles.pokemonName}>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default LikedPokemon;
