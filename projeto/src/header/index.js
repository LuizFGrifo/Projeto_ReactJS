import React from "react";
import './style.css';

export default function header() {
    return (
        <header>
        <nav>
          <a className='logo' href="">Turma de programa 2023</a>
          <ul className='nav-list'>
            <li><a href="/">Início</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Serviços</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
}