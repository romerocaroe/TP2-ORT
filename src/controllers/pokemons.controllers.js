import services from '../services/pokemons.services.js'

const getPokemons = async (req,res) => {
    const pokemons = await services.getPokemons()
    res.send(pokemons)
}

const getPokemonById = async (req,res) => {
    const {id} = req.params
    const pokemon = await services.getPokemonById(id)
    res.send(pokemon)
}

export default {
    getPokemons,
    getPokemonById
}