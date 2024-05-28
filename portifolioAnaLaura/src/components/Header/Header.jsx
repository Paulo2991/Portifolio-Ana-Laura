import * as S from "./header-styled";
import { Link } from "react-router-dom";
import foto from "../../assets/foto.jpg";

function Header() {
  return (
    <>
      <S.Header>
        <S.Nav> 
         <S.Foto src={foto} />
          <S.Ul>
            <S.Li>
              <Link to="/">Home</Link>
            </S.Li>
            <S.Li>
              <Link to="/">Sobre</Link>
            </S.Li>
            <S.Li>
              <Link to="/">Artigos</Link>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
    </>
  );
}

export default Header;
