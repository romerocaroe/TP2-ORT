
import 'dotenv/config'
import express from 'express'
import router from './src/routes/pokemons.routes.js'

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', router)

app.listen(PORT,() => { console.log(`Puerto corriendo en: ${PORT}`) })
app.on('error', (err) => console.log(`Error: ${err}`))