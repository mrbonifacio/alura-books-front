import { livros } from "./lastData";
import CardSuggest from "../CardSuggest";
import { Title } from "../Title";
import imgLivro from "../../images/livro2.png";
import styled from "styled-components";

const LastUpdatesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const NewsBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastUpdates() {
  return (
    <LastUpdatesContainer>
      <Title cor="#EB9B00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewsBooksContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="Livros lançamentos" />
        ))}
      </NewsBooksContainer>
      <CardSuggest
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google."
        img={imgLivro}
      />
    </LastUpdatesContainer>
  );
}

export default LastUpdates;
