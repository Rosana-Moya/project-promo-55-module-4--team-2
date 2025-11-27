import "react";
import { Link } from 'react-router-dom';
import AdalabLogo from '../images/adalab.png';
import LaptopIcon from '../images/laptop-code-solid.svg';

const HeaderList = () => {
    return (
        <header className="header">
            <div className="top-header">
                <div className="icon-text">
                    <img className="header-icon" src={LaptopIcon} alt="icono de ordenador" />
                    <h2 className="header-subtitle">Proyectos Molones</h2>
                </div>
                <div>
                    <img className="header-logo" src={AdalabLogo} alt="Logo Adalab" />
                </div>
            </div>

            <div className="header-info">   
                <h1 className="h1">Proyectos Molones</h1>
                <p className="header-paragraph">Escaparate en línea para recoger ideas a través de la tecnología.</p>
                <Link to="/">
                    <button className="header-button">NUEVO PROYECTO</button>
                </Link>
            </div>
        </header>
    );
};

export default HeaderList;
