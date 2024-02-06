import PokemonCard from "./PokemonCard/PokemonCard";
import './index.css'

const PokedexList = (props) => {

    const {
        pokemonList, 
        setSelectedPokemon, 
        setPokeSprite, 
        setPokeSpriteShiny,
    } = props;

    return(
        <div className="PokeList">
            {pokemonList.map((pokemon,index)=>
            <PokemonCard
            key={pokemon.id} 
            index={index}
            setPokeSprite={setPokeSprite}
            setPokeSpriteShiny={setPokeSpriteShiny} 
            pokemon={pokemon} 
            setSelectedPokemon={setSelectedPokemon}/>)}
        </div>
    )
}

export default PokedexList