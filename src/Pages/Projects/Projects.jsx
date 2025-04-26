import styles from "./Projects.module.css";
import Project1 from "../../Images/Project1.png";
import Project2 from "../../Images/Project2.png";
import Project3 from "../../Images/Project3.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.main}>
        <h2 className={styles.heading}>
          <span className={styles.headingTitle}>Projects</span>
          <span className={styles.headingDescription}>
            Here you will find some of the projects that I created.
          </span>
        </h2>
        <div className={styles.projectsContent}>
        <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project1}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Ecommerce de Jóias (Prata 925)</h3>
              <p className={styles.projectsRowContentDescription}>
              O site oferece uma experiência de compra segura e intuitiva. O projeto incluiu a integração de meios de pagamento como pix, cartões de crédito e boleto bancário. O resultado foi um aumento significativo nas vendas online e na satisfação dos clientes. (URL: <a href="https://www.sitedomaloka.com.br/" target="_blank" rel="noopener noreferrer">
     https://www.sitedomaloka.com.br/
  </a>)
              </p>
              <div className={styles.skills}>
              <div className={styles.skill}>Nuvemshop</div>
              <div className={styles.skill}>CSS 3</div>
              <div className={styles.skill}>Canva</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1000">
                                <a
                  className={styles.projectsButton}
                  href="https://www.sitedomaloka.com.br/"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className={styles.gitHubButton}
                  href="https://github.com/Davi-J-Manoel"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectsRow}>
          </div>
        <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project2}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Dashboard de Vendas</h3>
              <p className={styles.projectsRowContentDescription}>
                O projeto consiste em um dashboard interativo e dinâmico desenvolvido no Power BI, que fornece insights estratégicos sobre o desempenho de vendas de uma empresa fictícia. O objetivo é permitir uma análise clara e intuitiva dos principais indicadores de vendas, ajudando na tomada de decisão.
              </p>
              <div className={styles.skills}>
              <div className={styles.skill}>Power BI</div>
              <div className={styles.skill}>Excel</div>
              <div className={styles.skill}>Power Point</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1000">
              </div>
            </div>
          </div>
          <div className={styles.projectsRow}>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project3}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Portfolio</h3>
              <p className={styles.projectsRowContentDescription}>
                Portfolio is the page that you are looking at right now.
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>HTML 5</div>
                <div className={styles.skill}>CSS 3</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>React JS</div>
                <div className={styles.skill}>GIT</div>
                <div className={styles.skill}>GitHub</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1000">
                <a
                  className={styles.projectsButton}
                  href="https://davi-j-manoel.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className={styles.gitHubButton}
                  href="https://github.com/Davi-J-Manoel/Portfolio"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}