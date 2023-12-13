import { openDb } from "../configDB.js";

export async function createTableUsuarios() {
  try {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS Usuarios ( id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, email TEXT, confEmail TEXT, senha TEXT, confSenha TEXT)');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
}

export async function selectUsuarios(req, res) {
  try {
    const { email } = req.query; // Obtenha o parâmetro de consulta "email"
    const db = await openDb();

    if (email) {
      // Se um e-mail foi fornecido, filtre os resultados por e-mail
      const usuarios = await db.all('SELECT * FROM Usuarios WHERE email = ?', [email]);
      res.json(usuarios);
    } else {
      // Se nenhum e-mail foi fornecido, retorne todos os usuários
      const usuarios = await db.all('SELECT * FROM Usuarios');
      res.json(usuarios);
    }
  } catch (error) {
    console.error('Erro ao selecionar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function selectUsuario(req, res) {
  try {
    const id = req.params.id;
    const db = await openDb();
    const usuario = await db.get('SELECT * FROM Usuarios WHERE id=?', [id.id]);

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao selecionar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function insertUsuario(req, res) {
  try {
    const usuario = req.body;
    const db = await openDb();
    await db.run('INSERT INTO Usuarios (nome, sobrenome, email, confEmail, senha, confSenha) VALUES (?, ?, ?, ?, ?, ?)', [usuario.nome, usuario.sobrenome, usuario.email, usuario.confEmail, usuario.senha, usuario.confSenha]);
    res.json({ "statusCode": 200 });
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function updateUsuario(req, res) {
  try {
    const id = req.params.id; // Capturando o ID da URL
    const usuario = req.body;

    console.log('ID do usuário a ser atualizado:', id);

    const db = await openDb();
    await db.run('UPDATE Usuarios SET senha=?, confSenha=? WHERE id=?', [usuario.senha, usuario.confSenha, id]);

    res.json({ "statusCode": 200 });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}


export async function deleteUsuario(req, res) {
  try {
    const id = req.params.id;
    const db = await openDb();
    await db.run('DELETE FROM Usuarios WHERE id=?', [id]);
    res.json({ "statusCode": 200 });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
