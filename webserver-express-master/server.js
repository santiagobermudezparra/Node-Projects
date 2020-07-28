const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers


app.get('/', function (req, res) {

    res.render('home.hbs',{
        nombre: 'Santiago'
    });
    //res.send(salida);
});

app.get('/about', function (req, res) {

    res.render('about',{
       
    });
    //res.send(salida);
});

app.get('/data', function (req, res) {

    res.send('salida  /data');
});
 
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`); 
});