import knex from 'knex';

const createDB = knex({
  client: 'sqlite3',
  connection: {
    filename: './database/db.sqlite3',
  },
  useNullAsDefault: true,
});

export { createDB };