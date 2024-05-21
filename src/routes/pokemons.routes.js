import express from 'express';
import controller from '../controllers/pokemons.controllers.js'

const router = express.Router()

router.get('/pokemons', controller.getPokemons)
router.get('/pokemons/:id',controller.getPokemonById)

export default router