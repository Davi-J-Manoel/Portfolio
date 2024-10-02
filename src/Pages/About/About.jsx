import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function About() {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div
        className={styles.main}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1600"
      >
        <h2 className={styles.aboutTitle}>About me</h2>
        <p className={styles.aboutSubtitle}>
          Here you can see more information about me and my current programming skills / tools.
        </p>
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentContainer}>
            <h3 className={styles.aboutContentTitle}>A Little About Me</h3>
            <div className={styles.aboutContentTexts}>
              <p className={styles.aboutContentParagraphs}>
                I'm a <strong>FullStack Developer</strong> and a{" "}
                <strong>Software Engineering Student</strong>.I build Web
                Applications focused in extract and implement the best ideas.
                You can check some of my Projects in the next section.
              </p>
              <p className={styles.aboutContentParagraphs}>
                I am also in{" "}
                <a
                  className={styles.aboutContentLinks}
                  href="https://github.com/Davi-Manoel"
                  target="_blank"
                >
                  <strong>Github</strong>
                </a>{" "}
                and{" "}
                <a
                  className={styles.aboutContentLinks}
                  href="https://www.linkedin.com/in/davi-manoel-1367b0181/"
                  target="_blank"
                >
                  <strong>LinkedIn</strong>
                </a>
                . You may contact me there.
              </p>
              <p className={styles.aboutContentParagraphs}>
                I'm open to <strong>Job opportunities</strong> where I can contribute, learn, and grow. If you know of a position that aligns with my skills, feel free to{" "} <strong>contact</strong> me.{" "}
              </p>
            </div>
          </div>
          <div className={styles.aboutContentSkills}>
            <h3 className={styles.aboutContentTitle}> My Skills </h3>
            <div className={styles.skills}>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1600"
              >
                HTML
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1800"
              >
                CSS / SASS / SCSS
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2000"
              >
                JavaScript / Typescript
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Angular
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2200"
              >
                React
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="3000"
              >
                Node JS
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                .NET Core
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2600"
              >
                C#
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2600"
              >
                Java
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="3000"
              >
                Python
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="3000"
              >
                PHP
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2600"
              >
                GIT & Github
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                PostgreSQL
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                MySQL
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Postman
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Selenium
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                J-UNIT
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Linux
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Docker
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-duration="3000"
              >
                Kubernetes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
