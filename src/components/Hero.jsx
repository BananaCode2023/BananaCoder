import { useEffect } from "react";
import "../css/hero.css";
import Buttons from "./Buttons";
import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-img" data-aos="fade-up" style={{ zIndex: 0 }}>
        <img src={img1} alt="Peter John Reyes" />
        <img src={img4} alt="Peter John Reyes" />
      </div>
      <div className="hero-text" data-aos="fade-right">
        <h1>PETER JOHN R. REYES</h1>
        <h3>Entrepreneur | Web Developer</h3>
        <p>
          An entrepreneur and a creative Web Designer/ Web Developer based in
          Batangas, Philippines. A graduate of <br />
          BS Entrepreneurship at De La Salle Lipa & Full Stack Web Development
          at KodeGo.
        </p>
        <div className="hero-btn">
          <a href="#contact">
            <Buttons buttonType="filledButton" buttonText={`Let's Talk`} />
          </a>
          <a href="#skills">
            <Buttons buttonType="outlineButton" buttonText={`Explore`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
