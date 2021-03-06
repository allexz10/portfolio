import './Projects.scss';
import projectImage from '../../assets/images/projectImage.png';
import arrowRight from '../../assets/images/arrow-right.svg';

const Projects = () => (
  <section className="projects">
    <h3 className="projects__title">Proyectos</h3>
    <div className="image__wrapper">
      {Array.from(Array(4).keys()).map((it) => (
        <img
          className="projects__image"
          key={it}
          src={projectImage}
          alt="project-img"
        />
      ))}
    </div>
    <a className="projects__button" href="https://www.behance.net">
      Ver más en Behance
      <img src={arrowRight} alt="arrowImg" style={{ paddingLeft: '5px' }} />
    </a>
  </section>
);

export default Projects;
