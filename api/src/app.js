import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import router from './routes.js';
import { createTable } from './controler/Destinos.js';
import { createTableUsuarios } from './controler/Usuarios.js';
import { createTableInformationPassenger } from './controler/informationPassenger.js';
import { createTableViagens } from './controler/MinhasVIagens.js';

const app = express();
app.use(express.json());
app.use(cors());

createTable();
app.use(router);

createTableUsuarios();
app.use(router);

createTableInformationPassenger();
app.use(router)

createTableViagens();
app.use(router)

app.listen(3000, () => {
  console.log('API rodando.')
});

https.createServer({
  cert: fs.readFileSync('./src/SSL/code.crt'),
  key: fs.readFileSync('./src/SSL/code.key')
}, app).listen(3001, () => console.log("Rodando um HTTPS"));