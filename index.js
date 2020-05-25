
const express = require('express'),
      app = express(),
      color = require('colors')

app.set('port', 4000)

app.get('/', (req, res) => {

  let salida = {
    nombre: 'Ricardo',
    edad: 23,
    url: req.url
  }

  res.json(salida)

})

app.listen( app.get( 'port' ) , console.log( `Ejecutandose en el puerto ${ app.get( 'port' ) }`.brightYellow ))