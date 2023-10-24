import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import router from './routes.js';
import { createTable } from './controler/Usuarios.js';



const app = express();
app.use(express.json());
app.use(cors());

createTable();
app.use(router);

app.listen(3000, () => {
  console.log('API rodando.')
});

https.createServer({
  cert: fs.readFileSync('./src/SSL/code.crt'),
  key: fs.readFileSync('./src/SSL/code.key')
}, app).listen(3001, () => console.log("Rodando um HTTPS"));



// function limitarBusca () {
//   const express = require('express');
//   const sqlite3 = require('sqlite3');
//   const app = express();
  
//   const db = new sqlite3.Database('database.db'); // Substitua pelo nome do seu banco de dados
  
//   // Rota para obter a lista de destinos disponíveis
//   app.get('/destinos', (req, res) => {
//     db.all('SELECT * FROM destinos', (err, rows) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.json({ destinos: rows });
//     });
//   });
  
//   app.listen(3000, () => {
//     console.log('API está executando na porta 3000');
//   });
// }








