const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.urlencoded({ extended: false })); //Capturar Informacion de un Formulario en un objeto literal
app.use(express.json()); // Convertir el objeto literal en JSON

const apiSportix = require('./routes/apiSportix');

app.use('/sportix',cors(), apiSportix);

// Servidor
let port = process.env.PORT || 3040;
    
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});