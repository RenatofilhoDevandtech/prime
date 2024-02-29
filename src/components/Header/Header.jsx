import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="prime-header">
      <div className="logo">
        {/* Adicione sua logo aqui */}
        <img src="./assets/Logo.png" alt="Logo da Minha Empresa" className="logo-image" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/" className="nav-link">Início</a>
          </li>
          <li>
            <a href="/filmes" className="nav-link">Filmes</a>
          </li>
          <li>
            <a href="/series" className="nav-link">Séries</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
