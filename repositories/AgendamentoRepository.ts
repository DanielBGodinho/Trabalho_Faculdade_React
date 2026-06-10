import { getDB } from "@/database/database";
import { Agendamento } from '../types/Agendamento';

export const AgendamentoRepository = {
  async salvar(agendamento: Agendamento): Promise<void> {
    const db = await getDB();
    await db.runAsync(
      'INSERT INTO agendamentos (id_corte, hora, minuto) VALUES (?, ?, ?);',
      [agendamento.id_corte, agendamento.hora, agendamento.minuto]
    );
  },

  async buscarTodos(): Promise<Agendamento[]> {
    const db = await getDB();
    const resultado = await db.getAllAsync<Agendamento>('SELECT * FROM agendamentos;');
    return resultado;
  }
};