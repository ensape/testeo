const express = require("express")
const quotes = require("./quotes")
const quotes2 = require("./quotes2")

const app = express()
app.use(express.json())


// nuestra primera ruta
app.get('/quotes', (req, res) => {
  res.json(quotes.list())
})

//segunda ruta para crear frase
app.post('/quotes', (req, res) => {
    const { text, author } = req.body
    const quote = quotes.create(text, author)
    res.json(quote)
  })
app.post('/quotes2', (req, res) => {
    const { text, author } = req.body
    const quotes2 = quotes2.create(text, author)
    res.json(quotes2)
  })

//creacion de nuevas rutas
  app.patch('/quotes2/:id', (req, res) => {
    const { text, author } = req.body
    quotes2.edit(req.params.id, text, author)
    res.status(204).send()
  })
  
  app.delete('/quotes2/:id', (req, res) => {
    quotes2.destroy(req.params.id)
    res.status(204).send()
  })

app.listen(3000,function (){
 console.log("Servidor Listo... http://localhost:3000");
});
