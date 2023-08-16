import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: #6495ed;
  background-color: #e3e7e8;
  max-width: 400px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: #d6dadb;
  }
  button {
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #48ebcf;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;

    &:hover {
      background-color: #646cff;
      color: #fff;
    }
  }
  img {
    width: 300px;
    height: auto;
    background-size: contain;
  }
  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 2px;
  }
  p {
    font-size: 1rem;
    margin: 0;
    padding: 2px;
  }
  span {
    font-family: monospace, sans-serif, "Lucida Sans", "Lucida Sans Regular";
    font-size: 1.5rem;
    margin: 0 0 4px 0;
    border-bottom: 1px solid #6495ed;
  }
`;
