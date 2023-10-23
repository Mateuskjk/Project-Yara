import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Usuarios ( id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, email TEXT, confEmail TEXT, senha TEXT, confSenha TEXT)')
  })
}

export async function selectUsuarios(req, res) {
  openDb().then(db => {
     db.all('SELECT * FROM Usuarios')
     .then(usuarios=>res.json(usuarios))
   })
 }

 export async function selectUsuario(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM Usuarios WHERE id=?', [id])
    .then(usuarios=>res.json(usuarios))
  })
}

export async function insertUsuario(req, res) {
  let usuario = req.body;
  openDb().then(db => {
    db.run('INSERT INTO Usuarios (id, nome, sobrenome, email, confEmail, senha, confSenha) VALUES (?, ?, ?, ?, ?, ?, ?)', [usuario.id, usuario.nome, usuario.sobrenome, usuario.email, usuario.confEmail, usuario.senha, usuario.confSenha]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function updateUsuario(req, res) {
  let usuario = req.body;
  openDb().then(db => {
    db.run('UPDATE Usuarios SET id=?, nome=?, sobrenome=?, email=?, confEmail=?, senha=?, confSenha=? WHERE id=?', [usuario.id, usuario.nome, usuario.sobrenome, usuario.email, usuario.confEmail, usuario.senha, usuario.confSenha]);
  });
  return res.json({
    "statusCode": 200
  })
}

export async function deleteUsuario(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('DELETE FROM Usuarios WHERE id=?', [id])
    .then(usuarios=>res.json(usuarios))
  });
  return res.json({
    "statusCode": 200
  })
}