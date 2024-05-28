import Header from "../../components/Header/Header";
import * as S from "./home-styled";

function Home() {
  return (
    <>
      <S.Main>
        <Header />
        <S.Informacoes>
          <div>
            <h1>Ana Laura Passo De Magalhaes</h1>
            <h2>Contatos Pessoas</h2>
          </div>
        </S.Informacoes>
      </S.Main>
    </>
  );
}

export default Home;
