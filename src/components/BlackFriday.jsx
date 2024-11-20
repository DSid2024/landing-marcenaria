import React from "react";
import exemploImg from "../img/exemplo.jpg"; // Importando a imagem para garantir compatibilidade no bundler

const BlackFriday = () => (
  <section id="black-friday" className="py-5 bg-dark text-light">
    <div className="container text-center">
      {/* Título Principal */}
      <h2 className="mb-4 fw-bold text-uppercase text-warning">
        Especial de Black Friday
      </h2>

      {/* Informações Principais */}
      <p className="lead fs-3">
        Fechando até o dia <strong>31/11/2024</strong>, studios, kitchenets,
        apartamentos de 1 e 2 quartos a partir de <strong>R$ 15.000,00</strong>.
      </p>
      <p className="mb-4 fs-3">
        <em>Até 7 ambientes, entrega em dezembro de 2024!</em>
      </p>

      {/* Imagem com Legenda */}
      <figure className="text-center">
        <img
          src={exemploImg}
          alt="Black Friday"
          className="img-fluid rounded"
        />
        <figcaption className="mt-2">
          Planta do Matiz Cambuci atendida para fins ilustrativos.
        </figcaption>
      </figure>

      {/* Oferta Especial */}
      <p className="text-danger fs-3 mt-4">
        <strong>Oferta especial:</strong> Os dois primeiros clientes terão
        prazo de entrega prioritário e desconto exclusivo!{" "}
        <strong>100% MDF sob medida</strong>.
      </p>

      {/* Lista de Benefícios e Oferta */}
      <div className="row justify-content-center align-items-start mt-4">
        {/* Benefícios */}
        <div className="col-lg-6 text-start">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-white border-0">
              ✔ Armários e gaveteiro para cozinha
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              ✔ Lavanderia com armário
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              ✔ Banheiro com espelheira
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              ✔ Painel com rack para sala
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              ✔ Dois guarda-roupas
            </li>
          </ul>
        </div>

        {/* Oferta "Fechando Hoje" */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <div className="offer-box bg-secondary p-4 rounded text-light shadow">
            <h3 className="mb-3">Fechando hoje:</h3>
            <p className="h4">A partir de <strong>R$ 15.000</strong></p>
            <p className="h5">Entrega em dezembro de 2024</p>
            <hr className="text-light my-3" />
            <p className="text-warning mt-3">
              Consulte descontos para apartamentos maiores.
            </p>
          </div>
        </div>
      </div>

      {/* Botão de Chamada para Ação */}
      <div className="mt-5">
        <a href="https://wa.me/11930092923" className="btn btn-warning btn-lg shadow-lg px-5">
          Aproveitar Oferta
        </a>
      </div>

      {/* Nota de Rodapé */}
      <p className="mt-4 small">
        * Sujeito à disponibilidade do material escolhido e restrições, como
        dias e horários de montagem em prédios.
      </p>
    </div>
  </section>
);

export default BlackFriday;
