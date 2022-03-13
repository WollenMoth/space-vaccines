import "./App.css";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Container>
      <span className="icon-container icon-container-accent">
        <FontAwesomeIcon icon={faShield} className="icon-accent" />
      </span>
      <span className="icon-container icon-container-2xl">
        <FontAwesomeIcon icon={faShield} size="2xl" className="icon-primary" />
      </span>
    </Container>
  );
}

export default App;
