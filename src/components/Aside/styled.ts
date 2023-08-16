import styled from "styled-components";

type AsideProps = {
  $isShow: boolean;
};

export const Container = styled.div<AsideProps>`
  position: relative;
  z-index: 1;
  transition: all 0.5s ease;

  display: ${({ $isShow }) => ($isShow ? "flex" : "none")};

  flex-direction: column;
  align-items: center;

  background-color: #10c3f4;
  color: #000;

  min-height: 100vh;
  height: min-content;
  width: 480px;
  margin-left: 0;
  padding: 0 10px;

  font-size: 0.8rem;
  font-weight: 400;

  h1 {
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    place-items: center;
    border-bottom: 1px solid #61dafbaa;

    width: 100%;
    height: 50px;
    font-size: 1.5rem;

    button {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      background-color: #48ebcf;
      font-weight: 800;
      &:hover {
        scale: 0.9;
      }
    }
  }
  div {
    padding: 2px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #61dafbaa;
    margin-bottom: 5px;
    &:hover {
      background-color: #00000060;
      color: #fff;
    }
  }
  img {
    width: 30%;
    height: auto;
  }
  h2 {
    margin-left: 5px;
    width: 100%;
    text-align: start;
    font-size: 1rem;
  }
  p {
    padding: 4px;
    font-size: 0.8rem;
    font-family: monospace, sans-serif, "Lucida Sans", "Lucida Sans Regular";
    display: grid;
    place-items: center;

    button {
      width: 5px;
      height: 5px;
      background-color: #0a5063;
      color: #fff;
      font-weight: bold;
      &:hover {
        scale: 1.1;
        background-color: #646cff;
      }
    }
  }
  span {
    width: 50%;
    padding: 5px;

    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-family: monospace, sans-serif, "Lucida Sans", "Lucida Sans Regular";
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    margin: 5px;
    font-size: 1.2rem;

    padding: 0.6em 1.2em;
    font-weight: 500;
    font-family: inherit;
    background-color: #48ebcf;
    &:hover {
      background-color: #646cff;
      color: #fff;
    }
  }

  @media (max-width: 375px) {
    display: block;
    position: absolute;
    min-height: min-content;
    width: 100%;
  }
`;

export const ButtonSpan = styled.section`
  position: absolute;
  bottom: -50px;
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
  padding: 4px;
`;
