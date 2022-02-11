import './Projects.scss';
import projectImage from '../../assets/images/projectImage.png';
import fontsImage from '../../assets/images/fonts.png';
import colorA from '../../assets/images/color-1.png';
import colorB from '../../assets/images/color-2.png';
import buttonImage from '../../assets/images/buttons.png';

const Projects = () => (
  <section className="projects">
    <div className="project__styles">
      <h5 className="project__styles--subtitle">
        Web - Iglesia fuente de poder
      </h5>
      <h1 className="project__styles--title">Guía de estilos</h1>
      <img className="project__styles--image" src={projectImage} alt="" />
    </div>
    <div className="about__project">
      <h2 className="about__project--title">Acerca del proyecto</h2>
      <p className="about__project--text">
        La iglesia “Funte de poder” desarrollaba sus actividades de manera
        presencial en su lugar de reunión habitual, pero con la situación actual
        que se vive en el mundo, todo se comenzó a virtualizar y con ello los
        servicios de la iglesia. Esta será una web que permita conocer los
        medios por los cuales se pueden hacer donaciones a la iglesia para su
        proyecto de reconstrucción y conocer los detalles del mismo. Mi rol
        consistió en crear una guía de estilos y aplicarla en la creacion de los
        Mockups de alta fidelidad.
      </p>
    </div>
    <div className="typography">
      <h3 className="typography__title">Tipografía</h3>
      <p className="typography__text">
        Se difinió que la web será para un publico variado, con distintos gustos
        y diferentes edades, por lo que se escogió una tipografia san serif,
        elegante y simple, con el fin de que sea legible por todos los usuarios
        en sus distintas escalas.
      </p>
      <p className="typography__text">
        Esta tipografía está disponible de forma gratuita en
        {' '}
        <span>
          <a href="https://fonts.google.com/">Google fonts.</a>
        </span>
      </p>
      <img className="typography__image" src={fontsImage} alt="fonts-img" />
    </div>
    <div className="colors">
      <h3 className="colors__title">Paleta de colores</h3>
      <p className="colors__text">
        La elección de los colores se hizo en base al isologotipo de la iglesia,
        tomando sus colores principales y sus distintas intensidades. Eso con el
        fin de seguir una misma linea entre su identidad grafica y lo que será
        la web.
      </p>
      <img className="colors__image" src={colorA} alt="colorImg" />
      <img className="colors__image" src={colorB} alt="colorImg" />
    </div>
    <div className="buttons">
      <h3 className="buttons__title">Botones</h3>
      <p className="buttons__text">
        Los botones en sus diferentes escalas, tanto para movil como para
        escritorio.
      </p>
      <img className="buttons__image" src={buttonImage} alt="buttonsImg" />
    </div>
  </section>
);

export default Projects;
