import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS com duração de 1000ms
  }, []);

  return (
    <section
      className="bg-light text-center py-5"
      data-aos="fade-left" // Adiciona a animação AOS
    >
      <div className="container">
        <h2 className="display-4">Transformando madeira em arte!</h2>
        <p className="lead">Conheça nossos projetos personalizados para sua casa ou escritório.</p>
      </div>
    </section>
  );
};

export default Hero;
