const express = require('express')
const rotaLivro = require('./rotas/livro')
const cors = require('cors')
const rotaFavorito = require('./rotas/favorito')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))


app.use('/uploads/assets', express.static(path.join(__dirname, 'assets')))
app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
