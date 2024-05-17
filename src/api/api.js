import axios from 'axios';


// Fetching Data from the api
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 898) + 1;
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};