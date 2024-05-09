import express from 'express'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(PORT,() => { console.log("Hello world!") })
app.on('error', (err) => console.log(`Error: ${err}`))