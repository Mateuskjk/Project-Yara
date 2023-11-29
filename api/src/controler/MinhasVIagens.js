import { openDb } from "../configDB.js";

export async function createTableViagens() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Viagens (id INTEGER PRIMARY KEY, origem TEXT, destino TEXT, dataIda TEXT, dataVolta TEXT, classViagem TEXT, passageiros INTEGER, valorPassagem REAL)');
  });
}

export async function selectViagens(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM Viagens')
     .then(viagens=>res.json(viagens))
   })
 }

 export async function selectViagem(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Viagens WHERE id=?', [id])
    .then(viagens=>res.json(viagens))
  })
}

export async function insertViagem(req, res) {
  const viagem = req.body;

  openDb().then(db => {
    db.run('INSERT INTO Viagens (destino, origem, dataIda, dataVolta, classViagem, passageiros, valorPassagem) VALUES (?, ?, ?, ?, ?, ?, ?)', [viagem.destino, viagem.origem, viagem.dataIda, viagem.dataVolta, viagem.classViagem, viagem.passageiros, viagem.valorPassagem]);
  });

  res.status(200).json({
    message: "Viagem salva com sucesso",
  });
}


export async function updateViagem(req, res) {
  const viagem = req.body;
  openDb().then(db => {
    db.run('UPDATE Viagens SET valorPassagem=?, passageiros=?, classViagem=?, dataVolta=?, dataIda=?, origem=?, destino=? WHERE id=?', [viagem.valorPassagem, viagem.passageiros, viagem.classViagem, viagem.dataVolta, viagem.dataIda, viagem.origem, viagem.destino, viagem.id]);
  });
  return res.json({
    "statusCode": 200
  });
}

export async function deleteViagem(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM Viagens WHERE id=?', [id])
    .then(viagem=>res.json(viagem))
  });
  return res.json({
    "statusCode": 200
  })
}