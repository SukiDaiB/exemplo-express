const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.get('/', (request, response) => {
    response.send("Hey There!!")
})

app.get('/noticias', (request, response) => {
    response.send("Noticiário do METAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL")
})

app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1
    const numero2 = body.numero2
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado)
})

app.get('/noticias/ehoelisio', (request, response) => {
    const noticia = {
        id: 1,
        texto: "A BANDA ELYSIUM É DO METAL MESMO?",
        autor: "DETONATOR"
    }
    response.send(noticia);
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta" + port
    )
})