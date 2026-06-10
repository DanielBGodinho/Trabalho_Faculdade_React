import * as SQLite from 'expo-sqlite';

export type DB = SQLite.SQLiteDatabase;

export async function getDB(): Promise<DB> {
  const db = await SQLite.openDatabaseAsync('barbearia.db');

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