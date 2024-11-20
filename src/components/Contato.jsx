import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5ctuvc5', // Substitua pelo seu Service ID
        'template_6xpl8n6', // Substitua pelo seu Template ID
        form.current,
        'zj4u8uyR9dzQOUfoK' // Substitua pelo seu Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Falha ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contato</h2>
        <form ref={form} onSubmit={sendEmail} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="user_name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="form-control"
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="user_email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="form-control"
              placeholder="Seu email"
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contato;
