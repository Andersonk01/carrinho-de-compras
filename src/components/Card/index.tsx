import { Product } from "../../data/products";
import { Container } from "./styled";
import { ProductCtx } from "../../context";
import { useContext } from "react";

export const Card = ({ id, name, price, description = "" }: Product) => {
  const { data, setContextData } = useContext(ProductCtx);

  function handleSetContext(id: number, name: string, price: number) {
    if (!data.some((product) => product.id === id)) {
      setContextData((prevState) => [
        ...prevState,
        { id: id, name: name, totalPrice: price },
      ]);
    }
  }

  return (
    <Container key={id}>
      <img src={`/pizza${id}.png`} alt="pizza" />

      <h2>{name}</h2>
      <p>{description}</p>
      <span>{price}</span>

      <button onClick={() => handleSetContext(id, name, price)}>
        Adicionar
      </button>
    </Container>
  );
};
