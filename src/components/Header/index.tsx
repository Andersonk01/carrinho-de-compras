import { useContext } from "react";
import { ContainerHeader } from "./styled";
import { ProductCtx } from "../../context";

export const Header = () => {
  const { data, setOpenAside } = useContext(ProductCtx);

  return (
    <ContainerHeader>
      <h1>Pizzaria - Anderson</h1>
      <button onClick={() => setOpenAside(true)}>
        <img src="/bag.svg" alt="carrinho" />
        <span>{data.length}</span>
      </button>
    </ContainerHeader>
  );
};
