import './About.scss';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import arrowRight from '../../assets/images/arrow-right.svg';

type Props = {
  title: string;
  text: string;
  buttonTitle: string;
  sectionStyles: string;
  link: string;
};

const About = ({
  title, text, buttonTitle, sectionStyles, link,
}: Props) => (
  <section className={sectionStyles}>
    <img className="about__image image" src={avatar} alt="avatar-img" />
    <div className="block">
      <h2 className="block__title">{title}</h2>
      <p className="block__text">{text}</p>
      <Link
        className="block__button"
        to={link}
        onClick={() => window.scroll(0, 0)}
      >
        {buttonTitle}
        <img
          className="block__button--icon"
          src={arrowRight}
          alt="arrow-icon"
          style={{ marginLeft: '10px' }}
        />
      </Link>
    </div>
  </section>
);

export default About;
