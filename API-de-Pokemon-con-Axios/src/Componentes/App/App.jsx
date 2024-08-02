import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  const obtenerPokemons = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=807';
    try {
      setLoading(true); // Iniciar carga
      const respuesta = await axios.get(URL);
      const nombresPokemon = respuesta.data.results.map(p => p.name);
      setPokemon(nombresPokemon);
    } catch (err) {
      setError(err); // Manejo de errores
      console.error('Error fetching the Pokémon:', err);
    } finally {
      setLoading(false); // Cambiar el estado de carga a falso
    }
  }

  return (
    <>
    <h1>API de Pokemons</h1>
    <div>
      <button onClick={obtenerPokemons}>Obtener Pokemons</button>
      <ol>
          {pokemon.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ol>
    </div>
    </>
    
  );
}



export default App
