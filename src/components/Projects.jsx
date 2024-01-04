import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project4.png";
import project3 from "../assets/project2.png";
import project4 from "../assets/project3.png";
import Buttons from "./Buttons";
import { FaGithub, FaLink } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Recent Projects</h2>

      <div className="projects-container">
        <div className="project-row">
          <div className="project" data-aos="fade-up">
            <img src={project1} alt="" />
            <div className="project-detail">
              <h3>ReloWatches</h3>
              <p>React + Vite, CSS, Email JS, Swiper JS</p>
              <div className="project-links">
                <a
                  href="https://github.com/BananaCode2023/RELO-PROJECT.git"
                  target="_blank"
                >
                  <FaGithub /> Github
                </a>
                <a href="https://relowatches.netlify.app/" target="_blank">
                  <FaLink /> Url
                </a>
              </div>
            </div>
          </div>
          <div className="project" data-aos="fade-up">
            <img src={project2} alt="" />
            <div className="project-detail">
              <h3>L.Faraon</h3>
              <p>React + Vite, CSS, Swiper JS, </p>
              <div className="project-links">
                <a
                  href="https://github.com/BananaCode2023/L.Faraon.git"
                  target="_blank"
                >
                  <FaGithub /> Github
                </a>
                <a href="https://lfaraon.netlify.app/" target="_blank">
                  <FaLink /> Url
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-row">
          <div className="project" data-aos="fade-up">
            <img src={project3} alt="" />
            <div className="project-detail">
              <h3>OrganizeMe</h3>
              <p>Monggo DB, Express JS, React + Vite, Node JS</p>
              <div className="project-links">
                <a
                  href="https://github.com/BananaCode2023/OrganizeMe-Repo.git"
                  target="_blank"
                >
                  <FaGithub /> Github
                </a>
                <a
                  href="https://organizemefrontend.netlify.app/"
                  target="_blank"
                >
                  <FaLink /> Url
                </a>
              </div>
            </div>
          </div>
          <div className="project" data-aos="fade-up">
            <img src={project4} alt="" />
            <div className="project-detail">
              <h3>PurrfectPicks</h3>
              <p>React + Vite, CSS, Swiper JS, Bootsrap</p>
              <div className="project-links">
                <a
                  href="https://github.com/melmarieee/purrfect-picks"
                  target="_blank"
                >
                  <FaGithub /> Github
                </a>
                <a href="https://purrpicks.netlify.app/" target="_blank">
                  <FaLink /> Url
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="github-container">
          <h3>
            Want to see more? <br /> Check my GitHub
          </h3>
          <a
            href="https://github.com/BananaCode2023?tab=repositories"
            target="_blank"
          >
            <Buttons
              buttonType="filledIcon"
              buttonText="Github"
              buttonIcon={<FaGithub />}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
