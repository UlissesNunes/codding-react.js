import React, { useState } from 'react';
import { AiFillDingtalkCircle, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import './Header.css';

function Header() {
    // Estado para controlar se o menu mobile está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
       
        <header className="header">
           
            <div className="nav-menu">
               
                <div className="logo-container">
                    <AiFillDingtalkCircle className="logo-icon" />
                 
                    
                </div>
                <button 
                    className="menu-toggle-btn" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </button>

               
                <nav className={`menu-items ${isMenuOpen ? 'menu-open' : ''}`}>
                    <ul>
                        <li><a href="#">Eletrodomésticos</a></li>
                        <li><a href="#">Eletrônicos</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;