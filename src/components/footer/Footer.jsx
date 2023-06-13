import CV from "../../assets/BartoszMakara-CV-FrontEnd.pdf";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer__container">
      <h1 className="footer__title">Bartosz Makara</h1>

      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="footer__link">
            Portfolio
          </a>
        </li>
        <li>
          <a download="" href={CV} className="footer__link">
            Download CV
          </a>
        </li>
      </ul>

      <div className="footer__social">
        <a
          href="https://github.com/bartosz-makara"
          className="footer__social-link"
          target="_blank"
        >
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://github.com/bartosz-makara"
          className="footer__social-link"
          target="_blank"
        >
          <i class="bx bxl-github"></i>
        </a>
        <a
          href="https://github.com/bartosz-makara"
          className="footer__social-link"
          target="_blank"
        >
          <i class="bx bxl-twitter"></i>
        </a>
      </div>

      <span className="footer__copy">Website by Bartosz Makara 2023.</span>
    </section>
  );
};

export default Footer;
