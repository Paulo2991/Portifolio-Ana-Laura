import styled from "styled-components";

export const Main = styled.main`
   background-color: darkblue;
   height: 100vh;
`;
export const Informacoes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px;

  div{
    width: 50%;
    height: 30vh;
    padding: 12px;
    background-color: white;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;