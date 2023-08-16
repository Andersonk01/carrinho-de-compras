import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #e3e7e8;
  color: cornflowerblue;
  font-weight: 800;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;

  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 9;

  button img {
    width: 30px;
  }
  button {
    position: relative;
    display: flex;
    justify-content: center;
    background-color: inherit;
    &:hover {
      scale: 1.1;
    }
  }
  span {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    color: red;
    position: absolute;
    top: -6px;
    right: -2px;
  }
`;
