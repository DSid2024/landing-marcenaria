import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // faEnvelope corrigido aqui

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-1">© 2024 Marcenaria Acioli. Todos os direitos reservados.</p>
        
        {/* Redes Sociais */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://instagram.com/marcenariaaciole" className="text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://facebook.com/marcenariaaciole" className="text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://wa.me/11930092923" className="text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>

        {/* Informações de Contato */}
        <ul className="list-unstyled">
          <li className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <a href="tel:+5511930092923" className="text-white">+55 (11) 93009-2923</a>
            </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            Av. Sapopemba, 11527, Jardim Adutora
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
