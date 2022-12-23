const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Estas en el indice')
})

app.get('/home', (req, res) => {
    res.send('Ahora estamos en la HOME')
})

app.get('/home/:varOne', (req, res) => {
    console.log(typeof req.params.varOne)
    res.send('Response received')
})

app.listen(PORT,() => {
    console.log('listening...')
})