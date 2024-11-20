import React from 'react';
import c1 from '../img/c1.webp';
import c2 from '../img/c2.webp';
import c3 from '../img/c3.jpg';

const Galeria = () => (
  <section id="galeria" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4 display-4">Galeria</h2>
      <div
        id="carouselGaleria"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          maxWidth: '800px',
          margin: '0 auto', // Centralizar o carrossel
        }}
      >
        {/* Indicadores do Carrossel */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselGaleria"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselGaleria"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselGaleria"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Conteúdo do Carrossel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={c1}
              className="d-block w-100"
              alt="Trabalho 1"
              style={{
                objectFit: 'cover',
                height: '450px',
              }}
            />
            <div className="carousel-caption d-none d-md-block bg-black rounded-4 opacity-50 p-2">
              <h5>Quarto</h5>
              <p>Projeto incrível em louro freijó e cronos, contemplando escrivaninha e painel</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={c2}
              className="d-block w-100"
              alt="Trabalho 2"
              style={{
                objectFit: 'cover',
                height: '450px',
              }}
            />
            <div className="carousel-caption d-none d-md-block bg-black rounded-4 opacity-50 p-2">
              <h5>Lavanderia Completa</h5>
              <p>Armários em louro freijó e branco, aproveitando todo o espaço</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={c3}
              className="d-block w-100"
              alt="Trabalho 3"
              style={{
                objectFit: 'cover',
                height: '450px',
              }}
            />
            <div className="carousel-caption d-none d-md-block bg-black rounded-4 opacity-50 p-2">
              <h5>Cozinha</h5>
              <p>Moderno projeto em branco e louro freijó, com armários e painel amadeirado para o balcão</p>
            </div>
          </div>
        </div>

        {/* Controles de Navegação */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  </section>
);

export default Galeria;
