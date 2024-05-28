import Header from "../../components/Header/Header";
import * as S from "./home-styled";

function Home() {
  return (
    <>
      <S.Main>
        <Header />
        <S.Informacoes>
          <div>
            <h1>Ana Laura Passos De Magalhães</h1>
            <h2>Contatos Pessoas</h2>
            <p>Telefone: (61) 982997227</p>
            <p>Email: aninha12127@gmail.com</p>
            <p>Endereço: Quadra 01, Lote 160, Setor Industrial, Residencial Renascença,Gama DF</p>
          </div>
        </S.Informacoes>
      </S.Main>
    </>
  );
}

export default Home;
