import { Wrapper, BackgroundDiv } from "./styled";

type TBtn = {
  isMensagem?: boolean;
};

export const BtnComprar = ({ isMensagem = false }: TBtn) => {
  return (
    <BackgroundDiv isMensagem={isMensagem}>
      <Wrapper>
        <h2>Compra Feita Com Sucesso</h2>
        <p>Obrigado por comprar na melhor!</p>
      </Wrapper>
    </BackgroundDiv>
  );
};
