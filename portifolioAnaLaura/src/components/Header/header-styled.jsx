import styled,{ createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     border: 0;
     font-family: "Arial",sans-serif;
     font-size: 42%;  
     list-style-type: none;
     text-decoration: none;
   }
`;

export const Header = styled.header`
  background-color: darkblue;
  height: 15vh;
`;

export const Foto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 80%;
    padding: 0.25em;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 15px;
`;

export const Li = styled.li`
  font-size: 60px;
  font-weight: 30px;

  a {
    color: white;
  }
`;
