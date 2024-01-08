import PokemonCard from "./PokemonCard";
import './index.css'

const PokedexList = (props) => {

    const {pokemonList, setPokeSprite, setPokeSpriteShiny} = props;

    return(
        <div className="PokeList">
            {pokemonList.map((pokemon)=>
            <PokemonCard 
            id={pokemon.id} 
            setPokeSprite={setPokeSprite}
            setPokeSpriteShiny={setPokeSpriteShiny} 
            name={pokemon.name} 
            pokemonSprite={JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).front_default}
            pokemonSpriteShiny={JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).front_shiny}/>)}
        </div>
    )
}

export default PokedexList