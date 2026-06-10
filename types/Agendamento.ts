// types/Agendamento.ts
export interface Agendamento {
  id?: number; // O ID é opcional porque o banco gera sozinho no INSERT
  id_corte: number;
  hora: string;
  minuto: string;
}