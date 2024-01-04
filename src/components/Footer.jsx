import React from "react";
import "../css/footer.css";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import logo from "../assets/BananaCoderLogo.png";
import resume from "../assets/WebDev_CV_Peter_John_Reyes - Copy.pdf";

function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <img src={logo} alt="BananaCoder-Logo" className="logo" />
        <p>© 2023 BananaCoder. ALL RIGHTS RESERVED</p>
      </div>

      <div className="footer-col">
        <a href="#projects">Projects</a>
        <a href={resume} download>
          Resume
        </a>
      </div>
      <div className="footer-col">
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
    </footer>
  );
}

export default Footer;
