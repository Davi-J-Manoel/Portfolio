import styles from "./app.module.css";
import Header from "./Components/Header/Header";
import arrow from "./Images/arrow.gif";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <Header />
      <div
        id="home"
        className={styles.introduction}
        data-aos="zoom-out-down"
        data-aos-duration="1600"
        data-aos-anchor-placement="top-bottom"
      >
        <div className={styles.home}>
          <h1 className={styles.title}>
            I'm 
            <p className={styles.nameTitle}
            data-aos="fade-up"
            data-aos-delay="1000"
            > Davi Manoel </p>
          </h1>
          <p className={styles.subTitle}
          data-aos="fade-up"
          data-aos-delay="1400"
          >
            A Developer turning problems into solutions;<br>
            </br>Passionate about technology and the development world.
          </p>
          <img
            style={{ pointerEvents: "none" }}
            className={styles.arrow}
            src={arrow}
            alt="arrow down gif"
          />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;