import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import freijoImg from "../img/freijo.webp"; // Importando a imagem para garantir o caminho correto no bundler

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Para executar a animação apenas uma vez
        }
      },
      { threshold: 0.5 } // O componente será considerado visível quando 50% dele estiver na tela
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="py-5 bg-light"
      style={{
        backgroundImage: `url(${freijoImg})`, // Utilizando a importação para o caminho correto
        backgroundSize: "cover", // Garante que a imagem cubra todo o espaço
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita repetição da imagem
      }}
      ref={sectionRef}
    >
      <div className="container text-center text-white">
        <h2 className="mb-4 display-4">Sobre Nós</h2>
        <p className="lead" style={{ fontWeight: "600", fontSize: "1.2rem" }}>
          Com mais de <strong>20 anos</strong> de experiência, transformamos madeira em arte
          com dedicação e qualidade. Criamos, produzimos e instalamos móveis em MDF, que refletem o estilo e as necessidades dos nossos clientes.
        </p>

        <div className="row mt-5">
          {/* Anos de Experiência */}
          <div className="col-md-6 mb-4">
            <div
              className={`card border-0 shadow-sm p-3 ${isVisible ? "animate-card" : ""}`}
              style={{
                background: "rgba(255, 255, 255, 0.4)", // Transparência
                borderRadius: "10px", // Borda arredondada
              }}
            >
              <div className="card-body">
                <h3
                  className="display-5 fw-bold"
                  style={{ fontWeight: "800", color: "#333" }}
                >
                  {isVisible && <CountUp end={20} duration={2} />}+
                </h3>
                <p className="text-muted" style={{ fontWeight: "600" }}>Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Projetos Realizados */}
          <div className="col-md-6 mb-4">
            <div
              className={`card border-0 shadow-sm p-3 ${isVisible ? "animate-card" : ""}`}
              style={{
                background: "rgba(255, 255, 255, 0.4)", // Transparência
                borderRadius: "10px", // Borda arredondada
              }}
            >
              <div className="card-body">
                <h3
                  className="display-5 fw-bold"
                  style={{ fontWeight: "800", color: "#333" }}
                >
                  {isVisible && <CountUp end={1000} duration={3} />}+
                </h3>
                <p className="text-muted" style={{ fontWeight: "600" }}>Projetos Realizados</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4" style={{ fontWeight: "600", fontSize: "1.2rem" }}>
          Edi Carlos Acioli e equipe têm compromisso em transformar seus sonhos em realidade.
          Cada peça que é entregue com alto padrão de qualidade.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
