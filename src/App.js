import './App.css';
import { useEffect, useState} from 'react';
import { getAllPokemon } from './Server/Pokemon';
import PokedexList from './PokedexList'
import PokemonInfo from './Components/PokemonInfo/PokemonInfo'
import TopBar from './Components/TopBar/TopBar'

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokeSprite, setPokeSprite] = useState('');
  const [pokeSpriteShiny, setPokeSpriteShiny] = useState('');
  const [pokemonFilter, setPokemonFilter] = useState(null);

  useEffect(() => {
    getPokedexData();
  }, [pokemonFilter]);

  const getPokedexData = async() => {
    await getAllPokemon().then(({data}) => {
      const filteredList = pokemonFilter
        ? data.list.filter((pokemon) =>
            pokemon.pokemon_v2_pokemontypes.some((typeInfo) => typeInfo.pokemon_v2_type.name === pokemonFilter)
          )
        : data.list;
      setPokemonList(filteredList);
    });
  };

  return (
    <div className="App">
      <TopBar setPokemonFilter={setPokemonFilter}/>
      <div className='Content'>
        <PokedexList 
        setSelectedPokemon={setSelectedPokemon} 
        pokemonList={pokemonList} 
        setPokeSprite={setPokeSprite} 
        setPokeSpriteShiny={setPokeSpriteShiny}
        />
        <PokemonInfo 
        selectedPokemon={selectedPokemon}
        pokeSprite={pokeSprite} 
        pokeSpriteShiny={pokeSpriteShiny}/>
      </div>
    </div>
  );
}

export default App;
