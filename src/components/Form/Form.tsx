/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './Form.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export type ContactForm = {
  name: string;
  email: string;
  textarea: string;
};

const Form = () => {
  const [formData, setFormData] = useState<ContactForm[]>([]);
  const [isModal, setIsModal] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = ({ name, email, textarea }: ContactForm) => {
    setFormData([
      ...formData,
      {
        name,
        email,
        textarea,
      },
    ]);

    reset();

    setTimeout(() => {
      setIsModal(true);
    }, 500);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="section__form">
      {isModal ? (
        <div className="form__modal">
          <h1 className=" form__title form__modal--title">¡Gracias!</h1>
          <h2 className="form__modal--text">
            Tu formulario se ha enviado correctamente
          </h2>
          <button
            className="form__button form__modal--button"
            onClick={() => closeModal()}
          >
            cerca
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input__wrapper">
            <label className="form__label" htmlFor="name">
              Tu nombre
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              placeholder="Nombre"
              {...register('name', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.name && (
              <p className="error__message">{errors.name.message}</p>
            )}
          </div>
          <div className="input__wrapper">
            <label className="form__label" htmlFor="email">
              Tu E-mail
            </label>
            <input
              className="form__input"
              type="email"
              id="email"
              placeholder="Ejemplo@hotmail.com"
              {...register('email', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de correo electrónico no válida',
                },
              })}
            />
            {errors.email && (
              <p className="error__message">{errors.email.message}</p>
            )}
          </div>
          <div className="input__wrapper">
            <label className="form__label" htmlFor="name">
              Tu nombre
            </label>
            <textarea
              className="form__input form__input--textarea"
              id="name"
              placeholder="Hey..."
              {...register('textarea', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.textarea && (
              <p className="error__message">{errors.textarea.message}</p>
            )}
          </div>
          <button className="form__button">Enviar</button>
        </form>
      )}
    </div>
  );
};
export default Form;
