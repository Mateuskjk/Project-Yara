const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Olá, eu sou a api e estou funcionando.')
})

app.listen(3000, () => {
  console.log('Estou escutando.')
})