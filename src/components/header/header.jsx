import "./header.css";
import logo from "../../general/images/Studio_Ghibli_logo.png";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document
        .getElementsByClassName("header-container__menu-content")[0]
        .classList.add("expanded");
    } else {
      document
        .getElementsByClassName("header-container__menu-content")[0]
        .classList.remove("expanded");
    }
  });

  return (
    <header className="header-container">
      <img src={logo} className="header-logo" alt="Studios Ghibli Logo" />
      <div id="menu" className="header-container__menu-content">
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filmes
        </a>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atores
        </a>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Locais
        </a>
      </div>
      <button
        className="hamburguer-icon"
        onClick={() => setOpen(!isOpen)}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
