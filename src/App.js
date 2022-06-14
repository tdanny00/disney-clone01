import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Services from "./Components/Services/Services";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Scroll from "./Components/Scroll/Scroll";

function App() {
  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <Intro />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
