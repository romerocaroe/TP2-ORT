import model from '../models/pokemons.models.js'

const getPokemons = async () => {
    const pokemons = await model.getPokemons()
    return pokemons
}

const getPokemonById = async (id) => {
    const pokemon = await model.getPokemonById(id)
    return pokemon
}

export default {
    getPokemons,
    getPokemonById
}