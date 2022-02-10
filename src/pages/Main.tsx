import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const Main = () => (
  <section className="main">
    <Hero />
    <About
      sectionStyles="about"
      title="Acerca de mi"
      text="Hola! mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo,
       me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI,
      considero que un buen producto no solo brinda una solución sino que permite crear una
       experiencia emocional en las personas que lo usan.En mi proceso creativo utilizo
        herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el
         flujo de trabajo para la producción de interfaces de usuario."
      buttonTitle="Mas acerca de mi"
      link="/about"
    />
    <Projects />
  </section>
);

export default Main;
