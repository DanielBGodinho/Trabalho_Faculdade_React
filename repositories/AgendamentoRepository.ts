// repositories/AgendamentoRepository.ts
import { getDB } from "@/database/database";
import { Agendamento } from '../types/Agendamento';

export const AgendamentoRepository = {
  // Salva o agendamento no SQLite
  async salvar(agendamento: Agendamento): Promise<void> {
    const db = await getDB();
    await db.runAsync(
      'INSERT INTO agendamentos (id_corte, hora, minuto) VALUES (?, ?, ?);',
      [agendamento.id_corte, agendamento.hora, agendamento.minuto]
    );
  },

  // Busca todos os agendamentos salvos no SQLite
  async buscarTodos(): Promise<Agendamento[]> {
    const db = await getDB();
    const resultado = await db.getAllAsync<Agendamento>('SELECT * FROM agendamentos;');
    return resultado;
  }
};