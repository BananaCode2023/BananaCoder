import { useEffect } from "react";
import "../css/skills.css";
import skill1 from "../assets/skill1.png";
import skill2 from "../assets/skill2.png";
import skill3 from "../assets/skill3.png";
import skill4 from "../assets/skill4.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2>What Can I Do?</h2>
      <div className="skills-container">
        <div className="skill-row">
          <div className="skill web-designing" data-aos="zoom-in">
            <img src={skill1} alt="Web Designing" />
            <div className="skill-text">
              <h3>Web Designing</h3>
              <p>
                Designing is a hobby and passion to me since I was a kid.
                Natural instincts in creativeness helped me a lot in web
                designing. With the use of latest technologies, I design
                websites with creativity using Figma, Photoshop, Canva <br />
                and my favorite, the classic, <br />
                pen & paper.
              </p>
            </div>
          </div>

          <div className="skill web-development" data-aos="zoom-in">
            <img src={skill2} alt="Web Development" />
            <div className="skill-text">
              <h3>Web Development</h3>
              <p>
                Equipped with proper foundation in programming, I love to
                develop websites using React JS, <br />
                Express JS, Node JS & Mongo DB. Being one <br />
                of the top students of KodeGo, I ensure quality work by
                implementing the best practices possible
                <br />
                and continuously improve my skills by staying updated with the
                latest technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="skill-row">
          <div className="skill entrepreneurship" data-aos="zoom-in">
            <img src={skill3} alt="Entrepreneurship" />
            <div className="skill-text">
              <h3>Entrepreneurship</h3>
              <p>
                Born with a family business, and graduating as an entrepreneur,
                managing and running a business is a norm. When I discovered web
                designing and web development after graduating, I realized that
                I could use my business minded side to develop wealth generating
                websites. Now I understand why the industry is shifting
                <br />
                into web development as it serves <br />
                as a vehicle to success
              </p>
            </div>
          </div>

          <div className="skill leadership" data-aos="zoom-in">
            <img src={skill4} alt="Leadership" />
            <div className="skill-text">
              <h3>Leadership</h3>
              <p>
                Leaders are not born naturally, they are forged through
                experience, perseverance, and relentless pursuit of growth. As
                entrepreneur, being a team player plays a big part in success
                but being a leader brings long-term success. I can handle
                pressure, and manage a team of different minds.
                <br />
                What I love about working with a team <br />
                is you fail and succeed together doing <br />
                something you are passionate about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
