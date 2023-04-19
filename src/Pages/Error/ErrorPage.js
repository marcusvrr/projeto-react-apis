import Header from "../../Components/Header";
import { Container } from "./styles";

function ErrorPage() {
  return (
    <Container>
      <Header />
      <h1>Ops! Essa página foi levada pela Equipe Rocket!</h1>
      <img src="https://www.einerd.com.br/wp-content/uploads/2020/05/Pok%C3%A9mon-Wobbuffet-e-Equipe-Rocket-capa.jpg"alt="equipe rocket" />
    </Container>
  );
}

export default ErrorPage;