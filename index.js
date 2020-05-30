const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/vangogh', (req, res)=>{
    res.render('vincent');
});

app.get('/dali', (req, res)=>{
    res.render('dali');
});

app.get('/picasso', (req, res)=>{
    res.render('picasso');
});

app.get('/rem', (req, res)=>{
    res.render('rembrant');
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});