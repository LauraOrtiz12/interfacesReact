import React from 'react';
import '../css/inicio.css';
import '../css/global.css';
import logo from '../img/logo.png';


const Header = () => {
  return (
    <header className="encabezado">
      <img className="logo" src={logo} alt="logo-SEEP" />
      <div>
        <h6>Bienvenido(a) (Usuario)</h6>
        <a className="cerrar-sesion" href="#">Cerrar sesión</a>
      </div>
    </header>
  );
}

export default Header;
