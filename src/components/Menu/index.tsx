import { useState } from "react";
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>
      <nav className={`nav ${isOpen && "active"}`}>
        <button
          className="btn-menu"
          aria-label="Abrir Menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          menu <span className="hamburguer"></span>
        </button>

        <ul className="menu" role="menu" id="menu">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
