import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import router from './routes.js';
import { createTable } from './controler/Destinos.js';
import { createTableUsuarios } from './controler/Usuarios.js';
import { createTableInformationPassenger } from './controler/informationPassenger.js';
import { sendMail } from './controler/passagem.js';
import { createTableHoraViagem } from './controler/HoraViagem.js';
import { createTableSigla } from './controler/Sigla.js';
import { createTableCompanhia } from './controler/Companhias.js';

const app = express();
const port = process.env.PORT || 3002;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 140 * 1000;
server.headersTimeout = 140 * 1000;

app.use(express.json());
app.use(cors());

createTable();
app.use(router);

createTableUsuarios();
app.use(router);

createTableInformationPassenger();
app.use(router)

sendMail();
app.use(router)

createTableHoraViagem();
app.use(router)

createTableSigla();
app.use(router)

createTableCompanhia();
app.use(router)


app.listen(3000, () => {
  console.log('API rodando.')
});

https.createServer({
  cert: fs.readFileSync('./assets/SSL/code.crt'),
  key: fs.readFileSync('./assets/SSL/code.key')
}, app).listen(3001, () => console.log("Rodando um HTTPS"));