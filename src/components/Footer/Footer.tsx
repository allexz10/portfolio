import { Link } from 'react-router-dom';
import LinkedIn from '../../assets/images/Linkendl.svg';
import Figma from '../../assets/images/Figma.svg';
import Behaince from '../../assets/images/Behance.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="logo">
        <span className="logo__text">Miguel UI</span>
      </div>
      <div className="footer__content">
        <Link
          className="footer__title"
          to="/main"
          onClick={() => window.scroll(0, 0)}
        >
          Inicio
        </Link>
        <Link
          className="footer__text footer__content--link"
          to="/about"
          onClick={() => window.scroll(0, 0)}
        >
          Acerca de mi
        </Link>
        <Link
          className="footer__text footer__content--link"
          to="/projects"
          onClick={() => window.scroll(0, 0)}
        >
          Proyectos
        </Link>
      </div>
      <div className="footer__content">
        <Link
          className="footer__title"
          to="/contacts"
          onClick={() => window.scroll(0, 0)}
        >
          Contáctame
        </Link>
        <a
          className="footer__text footer__content--link"
          href="mailto:miguelruz1126@gmail.com"
        >
          Correo
        </a>
        <a
          className="footer__text footer__content--link"
          href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
        >
          LinkedIn
        </a>
      </div>
      <div className="footer__social">
        <span className="footer__title footer__title--social">Social</span>
        <div className="footer__content--link footer__social--icons">
          <a className="footer__social--icon" href="https://www.behance.net">
            <img src={Behaince} alt="behaince--img" />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
            className="footer__social--icon"
          >
            <img src={LinkedIn} alt="linkedin--img" />
          </a>
          <a className="footer__social--icon" href="https://www.figma.com">
            <img src={Figma} alt="figma--img" />
          </a>
        </div>
      </div>
    </div>
    <span className="footer__author">© 2021 Miguel Ruz</span>
  </footer>
);

export default Footer;
