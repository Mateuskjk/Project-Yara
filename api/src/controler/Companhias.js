import { openDb } from "../configDB.js";

export async function createTableCompanhia() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Companhias ( id INTEGER  PRIMARY KEY not null, empresa TEXT)')
  })
}

export async function Companhias(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM Companhias')
     .then(companhias=>res.json(companhias))
   })
 }

 export async function Companhia(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Companhias WHERE id=?', [id])
    .then(companhias=>res.json(companhias))
  })
}

export async function ptCompanhia(req, res) {
  const name = req.body;
  openDb().then(db => {
    db.run('INSERT INTO Companhias (empresa) VALUES (?)', [name.empresa]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function udtCompanhia(req, res) {
  const name = req.body;
  openDb().then(db => {
    db.run('UPDATE Companhias SET empresa=? WHERE id=?', [name.empresa, name.id]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function delCompanhia(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM Companhias WHERE id=?', [id])
    .then(companhia=>res.json(companhia))
  });
  return res.json({
    "statusCode": 200
  })
}