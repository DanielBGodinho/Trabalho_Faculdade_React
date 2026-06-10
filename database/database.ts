// app/database.ts
import * as SQLite from 'expo-sqlite';

export type DB = SQLite.SQLiteDatabase;

export async function getDB(): Promise<DB> {
  // Cria ou abre o arquivo de banco chamado barbearia.db
  const db = await SQLite.openDatabaseAsync('barbearia.db');

  // Cria a tabela de agendamentos se ela não existir
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS agendamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_corte INTEGER NOT NULL,
      hora TEXT NOT NULL,
      minuto TEXT NOT NULL
    );
  `);

  return db;
}