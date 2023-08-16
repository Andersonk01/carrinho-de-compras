import styled from "styled-components";

type TProps = {
  isMensagem: boolean;
};

export const BackgroundDiv = styled.div<TProps>`
  display: ${({ isMensagem }) => (isMensagem ? "flex" : "none")};

  transition: display 0.5s ease;
  position: fixed;
  background-color: #00000080;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-200px, -200px);

  background-color: #e3e7e8;
  border-radius: 24px;
  padding: 20px;

  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: #10c3f4;
  }
  p {
    font-size: 1rem;
  }
`;
