import Form from '../components/Form/Form';
import './Contacts.scss';

const Contacts = () => (
  <section className="contacts">
    <h1 className="contacts__title">¡Hablemos!</h1>
    <h5 className="contacts__subtitle">
      Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en
      escribirme!
    </h5>
    <Form />
  </section>
);

export default Contacts;
