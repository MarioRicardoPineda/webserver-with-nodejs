
const express = require('express'),
      app = express(),
      color = require('colors'),
      hbs = require('hbs')
      helpers = require('./hbs/helpers')


// MIDDLEWARES
const port = process.env.PORT || app.set('port', 9000)
app.set('port', 9000)
app.use( express.static( __dirname + '/public' ) )

// Expres Engine
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials')

// ROUTING  
app.get('/', (req, res) => {

  res.render('index', {
    nombre: 'Ricardo'
  })

})
app.get('/about', (req, res) => {

  res.render('about', {
    nombre: 'Ricardo',
    imgURL: 'assets/img/quiz-home.svg'
  })

})

app.listen( app.get( 'port' ) , console.log( `Ejecutandose en el puerto ${ app.get( 'port' ) }`.brightYellow ))