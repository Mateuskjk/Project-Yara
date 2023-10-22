import {openDb} from './configDB.js';


import express from 'express';
const app = express();
app.use(express.json());

openDb();

app.get('/', function(req, res){
  res.send('Olá, eu sou a api e estou funcionando.')
})

app.post('/pessoa', (req, res) => {
  console.log(req.body)
  res.json({
    "statucCode": 200
  })
})
app.listen(3000, () => {
  console.log('Estou escutando.')
})