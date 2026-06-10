const BASE_URL = 'https://6a1774e81878294b597b648e.mockapi.io/api/v1';

export async function getProdutos() {
  const response = await fetch(`${BASE_URL}/Produtos`);
  return response.json();
}