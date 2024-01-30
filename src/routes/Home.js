import Search from "../components/Search";
import styled from "styled-components";
import LastUpdates from "../components/LastUpdates";

const AppContainer = styled.div`
    width: 100ww;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <LastUpdates />
    </AppContainer>
  );
}

export default Home;
