import { openDb } from "../configDB.js";

export async function createTableInformationPassenger() {
  try {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS InformationPassenger ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobrenome TEXT, cpf TEXT, rg TEXT, idade TEXT, email TEXT)');

  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
}

export async function selectInformationPassengers(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM InformationPassenger')
    .then(info=>res.json(info))
  })
}

export async function selectInformationPassenger(req, res) {
  let id = req.body.id;
  openDb().then(db => {
    db.get('SELECT * FROM InformationPassenger WHERE id=?', [id])
    .then(info=>res.json(info))
  })
}

export async function insertInformationPassenger(req, res) {
  try {
    const infoPassengers = req.body; // Agora espera-se que req.body seja um array de passageiros
    const db = await openDb();

    // Itera sobre o array e insere cada passageiro no banco de dados
    for (const infoPassenger of infoPassengers) {
      await db.run('INSERT INTO InformationPassenger (nome, sobrenome, cpf, rg, idade, email) VALUES (?, ?, ?, ?, ?, ?)', [infoPassenger.nome, infoPassenger.sobrenome, infoPassenger.cpf, infoPassenger.rg, infoPassenger.idade, infoPassenger.email]);
    }

    res.json({ "statusCode": 200 });
  } catch (error) {
    console.error('Erro ao inserir InformationPassenger:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function updatenInformationPassenger(req, res) {
  try {
    const id = req.params.id; // Capturando o ID da URL
    const infoPassenger = req.body;

    console.log('ID do usuário a ser atualizado:', id);

    const db = await openDb();
    await db.run('UPDATE InformationPassenger SET nome=?, sobrenome=?, cpf=?, rg=?, idade=?, email=? WHERE id=?', [infoPassenger.nome, infoPassenger.sobrenome, infoPassenger.cpf, infoPassenger.rg, infoPassenger.idade, infoPassenger.email, id]);

    res.json({ "statusCode": 200 });
  } catch (error) {
    console.error('Erro ao atualizar InformationPassenger:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}


export async function deletenInformationPassenger(req, res) {
  try {
    const id = req.params.id;
    const db = await openDb();
    await db.run('DELETE FROM InformationPassenger WHERE id=?', [id]);
    res.json({ "statusCode": 200 });

  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
