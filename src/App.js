import "./App.css";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Companies from "./components/companies";
import Benefits from "./components/benefits";
import Preparations from "./components/preparations";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Companies />
      <Benefits />
      <Preparations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
