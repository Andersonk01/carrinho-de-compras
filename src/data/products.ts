export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Margherita",
    price: 29.99,
    description:
      "Deliciosa pizza margherita com molho de tomate, mussarela fresca e manjericão.",
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    price: 34.99,
    description:
      "Uma combinação de pepperoni, queijo derretido e molho de tomate picante.",
  },
  {
    id: 3,
    name: "Havaiana",
    price: 31.99,
    description: "A clássica pizza havaiana com presunto e abacaxi fresco.",
  },
  {
    id: 4,
    name: "Frango com Barbecue",
    price: 32.99,
    description:
      "Pizza coberta com pedaços suculentos de frango e molho barbecue.",
  },
  {
    id: 5,
    name: "Vegetariana",
    price: 30.99,
    description:
      "Uma opção saudável com uma variedade de vegetais frescos e queijo derretido.",
  },
  {
    id: 6,
    name: "Calabresa Especial",
    price: 28.99,
    description:
      "Uma pizza clássica de calabresa com toque especial, perfeita para os amantes de sabores intensos.",
  },
];

export default products;
