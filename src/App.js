import './App.css';
import { useEffect, useState} from 'react';
import { getAllPokemon } from './Server/Pokemon';
import PokedexList from './PokedexList'
import PokemonInfo from './Components/PokemonInfo'
import TopBar from './Components/TopBar'

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokeSprite, setPokeSprite] = useState('');
  const [pokeSpriteShiny, setPokeSpriteShiny] = useState('');

  useEffect(() => {
    getPokedexData();
  }, []);

  const getPokedexData = async() => {
    await getAllPokemon()
      .then(({data}) =>
      {
        setPokemonList(data.list);
      })
  }

  return (
    <div className="App">
      <TopBar/>
      <div className='Content'>
        <PokedexList pokemonList={pokemonList} setPokeSprite={setPokeSprite} setPokeSpriteShiny={setPokeSpriteShiny}/>
        <PokemonInfo pokeSprite={pokeSprite} pokeSpriteShiny={pokeSpriteShiny}/>
      </div>
    </div>
  );
}

export default App;
