import { prodType } from "../types/prodType";

export const cortes: prodType[] = [
  {
    id: 1,
    titulo: "Corte de Cabelo",
    descricao: "Corte moderno no estilo que preferir",
    preco: "R$ 40,00",
    imagem: require('@/assets/images/corte de cabelo.jpg')
  },
  {
    id: 2,
    titulo: "Barba",
    descricao: "Aparo e modelagem completa da barba",
    preco: "R$ 30,00",
    imagem: require('@/assets/images/barba.jpg')
  },
  {
    id: 3,
    titulo: "Corte + Barba",
    descricao: "Corte de cabelo e barba juntos",
    preco: "R$ 65,00",
    imagem: require('@/assets/images/cabelo_barba.jpeg')
  },
  {
    id: 4,
    titulo: "Sobrancelha",
    descricao: "Design e aparo de sobrancelha",
    preco: "R$ 15,00",
    imagem: require('@/assets/images/sombrancelha.jpg')
  },
  {
    id: 5,
    titulo: "Completo",
    descricao: "Corte, barba e sobrancelha",
    preco: "R$ 75,00",
    imagem: require('@/assets/images/completo.jpg')
  },
  {
    id: 6,
    titulo: "Pigmentação de Barba",
    descricao: "Pigmentação para preencher falhas na barba",
    preco: "R$ 50,00",
    imagem: require('@/assets/images/pingmentação.jpg')
  },
  {
    id: 7,
    titulo: "Relaxamento Capilar",
    descricao: "Alisa e amacia os fios com durabilidade",
    preco: "R$ 80,00",
    imagem: require('@/assets/images/relaxamento.jpg')
  },
  {
    id: 8,
    titulo: "Hidratação Capilar",
    descricao: "Tratamento profundo para cabelos ressecados",
    preco: "R$ 55,00",
    imagem: require('@/assets/images/hidratação.jpg')
  },
]