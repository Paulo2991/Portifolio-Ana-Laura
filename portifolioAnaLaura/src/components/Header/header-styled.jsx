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
  background-color: #13af9a;
  height: 15vh;
`;

export const Foto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80%;
  padding: 0.25em;

  @media screen and (max-width: 600px) {
    width: 80px;
    height: 70px;
    padding: 2px;
  }
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

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.10rem;
  }
`;

export const Li = styled.li`
  font-size: 60px;
  font-weight: 30px;

  a {
    color: white;
  }

  @media screen and (max-width: 600px){
     font-size: 10px;

     a{
        font-size: 18px;
     }
  }
`;
