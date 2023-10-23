import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Destinos ( id INTEGER PRIMARY KEY, destino TEXT)')
  })
}

export async function selectDestinos(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM Destinos')
     .then(destinos=>res.json(destinos))
   })
 }

 export async function selectDestino(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Destinos WHERE id=?', [id])
    .then(destinos=>res.json(destinos))
  })
}

export async function insertDestino(req, res) {
  let destino = req.body;
  openDb().then(db => {
    db.run('INSERT INTO Destinos (destino) VALUES (?)', [destino.destino]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function updateDestino(req, res) {
  let destino = req.body;
  openDb().then(db => {
    db.run('UPDATE Destinos SET destino=? WHERE id=?', [destino.destino, destino.id]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function deleteDestino(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM Destinos WHERE id=?', [id])
    .then(destino=>res.json(destino))
  });
  return res.json({
    "statusCode": 200
  })
}