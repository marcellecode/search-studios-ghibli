import "./header.css";
import logo from "../../general/images/Studio_Ghibli_logo.png";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header-container">
      <img src={logo} className="header-logo" alt="Studios Ghibli Logo" />
      <div id="menu" className={`header-container__menu-content ${(isOpen ? 'expanded' :  '')}`}>
        <Link className="header-link" to="/">
          Filmes
        </Link>
        <Link className="header-link" to="/atores">
          Atores
        </Link>
        <Link className="header-link" to="/locais">
          Locais
        </Link>
      </div>
      <button className="hamburguer-icon" onClick={() => setOpen(!isOpen)}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
