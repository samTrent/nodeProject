const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

var engine = require(path.join(__dirname + '/engine.js'));


express()
  .use(express.static(path.join(__dirname, '/public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function()
  {
    console.log('recieved requst');
  })
  .get('/run', engine.sendData)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
