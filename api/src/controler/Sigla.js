import { openDb } from "../configDB.js";

export async function createTableSigla() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Sigla ( id INTEGER PRIMARY KEY, local TEXT, sigla TEXT)')
  })
}

export async function selectSiglas(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM Sigla')
     .then(siglas=>res.json(siglas))
   })
 }

 export async function selectSigla(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Sigla WHERE id=?', [id])
    .then(siglas=>res.json(siglas))
  })
}

export async function insertSigla(req, res) {
  const siglaCity = req.body;
  openDb().then(db => {
    db.run('INSERT INTO Sigla (local, sigla) VALUES (?, ?)', [siglaCity.local, siglaCity.sigla]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function updateSigla(req, res) {
  const sigla = req.body;
  openDb().then(db => {
    db.run('UPDATE Destinos SET siglas=? WHERE id=?', [sigla.siglas, sigla.id]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function deleteSigla(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM Sigla WHERE id=?', [id])
    .then(sigla=>res.json(sigla))
  });
  return res.json({
    "statusCode": 200
  })
}