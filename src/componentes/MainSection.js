import React from 'react';
import '../css/inicio.css';
import '../css/global.css';
import '../css/menulateral.css';
import '../css/css_animate.css';
import { Link } from 'react-router-dom';


const MainSection = () => {
  return (
    <ul class="navMenuLat" role="list" style={{ zIndex: 1033 }}>
        <li>
            <Link to="/" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconTamano iconMenuLateral bi bi-house"></i>
            </Link>
            <div class="animated slideInLeft">Inicio</div>
        </li>
        <li>
            <Link to="/cuentas" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconMenuLateral bi bi-person-circle"></i>
            </Link>
            <div class="animated slideInLeft">Cuenta</div>
        </li>
        <li>
            <Link to="/calendario" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconMenuLateral bi bi-calendar-check"></i>
            </Link>
            <div class="animated slideInLeft">Calendario</div>
        </li>
        <li>
            <Link to="/" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconMenuLateral bi-people-fill"></i>
            </Link>
            <div class="animated slideInLeft">Fichas</div>
        </li>
        <li>
            <Link  to="/" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconMenuLateral bi bi-file-earmark-zip"></i>
            </Link>
            <div class="animated slideInLeft">Documentos</div>
        </li>
        <li>
            <Link to="/" aria-label="icon" class="iconLink">
                <i alt="icon" class="iconMenuLateral bi bi-card-checklist"></i>
            </Link>
            <div className="animated slideInLeft">Bitácoras</div>
        </li>
    </ul>
      
      );
    };

export default MainSection;
