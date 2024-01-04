import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <div className="main-container">
        <div className="row">
          <Header />
          <Hero />
        </div>

        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
