import { openDb } from "../configDB.js";

export async function createTableHoraViagem() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS HoraViagens ( id INTEGER PRIMARY KEY, Time TEXT)')
  })
}

export async function selectHoraViagens(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM HoraViagens')
     .then(horas=>res.json(horas))
   })
  
}

export async function selectHoraViagem(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Time WHERE id=?', [id])
    .then(hora=>res.json(hora))
  })
}

export async function insertHoraViagem(req, res) {
  const horaTime = req.body;
  openDb().then(db => {
    db.run('INSERT INTO HoraViagens (Time) VALUES (?)', [horaTime.Time]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function updateHoraViagem(req, res) {
  const horaTime = req.body;
  openDb().then(db => {
    db.run('UPDATE HoraViagens SET Time=? WHERE id=?', [horaTime.Time, horaTime.id]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function deleteHoraViagem(req, res) {
  const id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM HorasViagens WHERE id=?', [id])
    .then(hora=>res.json(hora))
  });
  return res.json({
    "statusCode": 200
  })
}