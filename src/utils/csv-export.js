import knex from 'knex';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho absoluto para o banco de dados
const dbPath = path.resolve(__dirname, '../../database/db.sqlite3');

// Configuração da conexão com o banco de dados SQLite
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
});

// Configuração do escritor de CSV
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'id', title: 'ID' },
    { id: 'title', title: 'Title' },
    { id: 'description', title: 'Description' },
    { id: 'created_at', title: 'Created At' },
    { id: 'updated_at', title: 'Updated At' },
    { id: 'completed_at', title: 'Completed At' },
  ],
});

async function exportToCSV() {
  try {
    // Executar a consulta para obter os dados
    const rows = await db.select('id', 'title', 'description', 'created_at', 'updated_at', 'completed_at').from('tasks');

    // Escrever os dados no arquivo CSV
    await csvWriter.writeRecords(rows);
    console.log('Dados exportados com sucesso para output.csv');
  } catch (err) {
    console.error('Erro ao exportar dados:', err);
  } finally {
    // Fechar a conexão com o banco de dados
    await db.destroy();
  }
}

// Executar a função de exportação
exportToCSV();