
const express = require('express'),
      app = express(),
      color = require('colors')

// MIDDLEWARES
app.set('port', 9000)
app.use( express.static( __dirname + '/public' ) )


// ROUTING  
// app.get('/', (req, res) => {

//   let salida = {
//     nombre: 'Ricardo',
//     edad: 23,
//     url: req.url
//   }

//   res.json(salida)

// })

app.listen( app.get( 'port' ) , console.log( `Ejecutandose en el puerto ${ app.get( 'port' ) }`.brightYellow ))