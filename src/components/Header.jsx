import { useState, useEffect } from "react";
import "../css/header.css";
import logo from "../assets/BananaCoderLogo.png";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";
import { IoDocument } from "react-icons/io5";
import { FaUserTie, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../assets/WebDev_CV_Peter_John_Reyes - Copy.pdf";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="BananaCoder-Logo" className="logo" />
        <div className="burger-menu">
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt=""
            onClick={handleIsOpen}
          />
          <div
            className={isOpen ? "open-overlay" : "close-overlay"}
            onClick={handleIsOpen}
          ></div>
          <div className={`toggle-menu ${isOpen ? "open-menu" : "close-menu"}`}>
            <div className="nav-col">
              <a href="#projects">
                <IoDocument />
                Projects
              </a>
              <a href={resume} download>
                <FaUserTie />
                Resume
              </a>
            </div>
            <div className="menu nav-buttons">
              <a
                href="https://www.linkedin.com/in/peter-john-reyes/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/BananaCode2023" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.behance.net/peterjohnreyes" target="_blank">
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-col" data-aos="fade-up">
        <a href="#projects">
          <IoDocument />
          Projects
        </a>
        <a href={resume} download>
          <FaUserTie />
          Resume
        </a>
      </div>

      <div className="logo-container" data-aos="fade-up">
        <img src={logo} alt="BananaCoder-Logo" className="logo" />
        <span>BananaCoder</span>
      </div>

      <div className="nav-buttons" data-aos="fade-up">
        <a href="https://www.linkedin.com/in/peter-john-reyes/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BananaCode2023" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.behance.net/peterjohnreyes" target="_blank">
          <FaBehance />
        </a>
      </div>
    </nav>
  );
}

export default Header;
