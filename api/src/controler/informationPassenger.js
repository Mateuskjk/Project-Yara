import { openDb } from "../configDB.js";

export async function createTableInformationPassenger() {
  try {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS InformationPassenger ( id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, cpf TEXT, rg TEXT, idade TEXT, email TEXT)');

  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
}

export async function selectInformationUser(req, res) {
  try {
    const { id } = req.query; // Obtenha o parâmetro de consulta "id"
    const db = await openDb();

    if (id) {
      // Se um e-mail foi fornecido, filtre os resultados por e-mail
      const user = await db.get('SELECT * FROM InformationPassenger WHERE id = ?', [id]);
      res.json(user);
    } else {
      // Se nenhum e-mail foi fornecido, retorne todos os usuários
      const users = await db.all('SELECT * FROM InformationPassenger');
      res.json(users);
    }
  } catch (error) {
    console.error('Erro ao selecionar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function selectInformationUserById(req, res) {
  try {
    const id = req.params.id;
    const db = await openDb();
    const user = await db.get('SELECT * FROM InformationPassenger WHERE id=?', [id]);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao selecionar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
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

export async function updateInformationPassenger(req, res) {
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


export async function deleteInformationPassenger(req, res) {
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

export async function getLastInsertedIdWithInfo(req, res) {
  try {
    const db = await openDb();

    // Passo 1: Obter o último ID
    const resultLastId = await db.get('SELECT MAX(id) AS lastId FROM InformationPassenger');
    const lastInsertedId = resultLastId.lastId;

    // Passo 2: Obter todas as informações relacionadas ao último ID
    const resultInfo = await db.get('SELECT * FROM InformationPassenger WHERE id = ?', [lastInsertedId]);

    if (resultInfo) {
      res.json(resultInfo);
    } else {
      res.status(404).json({ error: 'Informações não encontradas para o último ID' });
    }
  } catch (error) {
    console.error('Erro ao obter informações relacionadas ao último ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}


