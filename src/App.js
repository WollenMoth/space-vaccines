import "./App.css";
import Container from "react-bootstrap/Container";
import Icon from "./components/icon";
import { faShield } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Container>
      <Icon icon={faShield} variant="icon-accent" />
      <Icon icon={faShield} size="xl" />
    </Container>
  );
}

export default App;
