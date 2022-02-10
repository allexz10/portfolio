/* eslint-disable max-len */
import About from '../components/About/About';
import skillsList from '../data/skillsList';
import '../components/About/About.scss';

const AboutMe = () => (
  <section className="section__about">
    <About
      sectionStyles="aboutme"
      title="Miguel Ruz"
      text="Soy Diseñador UI, actualmente vivo en Turbaco-Bolivar, un pueblo a las afueras de Cartagena (Colombia).
   Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.
   Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.
   Hablemos!"
      link="/contacts"
      buttonTitle="miguelruz1126@gmail.com"
    />
    <div className="skills">
      <h1 className="skills__title">Mis habilidades</h1>
      <div className="skills__wrapper">
        {skillsList.map(({ imgSrc, title, text }) => (
          <div className="skills__content" key={title}>
            <img className="skills__content--image" src={imgSrc} alt={imgSrc} />
            <h3 className="skills__content--title">{title}</h3>
            <p className="skills__content--text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutMe;
