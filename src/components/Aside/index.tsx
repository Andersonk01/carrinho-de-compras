import { useContext, useState } from "react";
import { ProductCtx } from "../../context";
import { Container, ButtonSpan } from "./styled";
import { BtnComprar } from "../BtnComprar";
import products from "../../data/products";

export const Aside = () => {
  const { data, openAside, setOpenAside, setContextData } =
    useContext(ProductCtx);
  const [compraFeita, setCompraFeita] = useState(false);

  // funcao que fecha o aside e mostra a mensagem de compra feita
  const handleComprafeita = () => {
    if (data.length === 0) return;
    setCompraFeita(true);
    setContextData([]);
    setTimeout(() => {
      setCompraFeita(false);
    }, 3000);
  };

  // valor total de todos os produtos
  let total = 0;
  data.map((product) => {
    total += product.totalPrice;
  });

  // adiciona um produto
  const handleAddProduct = (productId: number) => {
    const updatedData = data.map((product) => {
      if (product.id === productId) {
        const originalProduct = products.find((p) => p.id === productId);
        if (originalProduct) {
          return {
            ...product,
            totalPrice: product.totalPrice + originalProduct.price,
          };
        }
      }
      return product;
    });
    setContextData(updatedData);
  };
  // remove um produto
  const handleRemoveProduct = (productId: number) => {
    const updatedData = data.map((product) => {
      if (product.id === productId) {
        const originalProduct = products.find((p) => p.id === productId);
        if (originalProduct) {
          return {
            ...product,
            totalPrice: Math.max(0, product.totalPrice - originalProduct.price),
          };
        }
      }
      return product;
    });

    setContextData(updatedData);
  };

  return (
    <>
      <Container $isShow={openAside}>
        <>
          <h1>
            Carrinho
            <button onClick={() => setOpenAside(false)}>X</button>
          </h1>
        </>
        {data.map((product) => (
          <div key={product.id}>
            <img src={`/pizza${product.id}.png`} alt="pizza" />
            <h2>{product.name}</h2>
            <p>
              {product.totalPrice.toFixed(2)}

              <button onClick={() => handleAddProduct(product.id)}>+</button>
              <button onClick={() => handleRemoveProduct(product.id)}>-</button>
            </p>
          </div>
        ))}
        <ButtonSpan>
          <span>{total.toFixed(2)}</span>
          <button
            onClick={() => {
              handleComprafeita();
              setOpenAside(false);
            }}
          >
            {data.length === 0 ? "Fechar" : "Comprar"}
          </button>
        </ButtonSpan>
      </Container>
      <BtnComprar isMensagem={compraFeita} />
    </>
  );
};
