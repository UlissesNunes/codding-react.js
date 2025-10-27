import React, { useState } from 'react';
import { AiFillDingtalkCircle, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import './Header.css';

function Header() {
    // 1. Estado para controlar se o menu mobile está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // O container principal
        <header className="header">
            {/* O conteúdo que deve ter largura máxima (Logo e Menu) */}
            <div className="nav-menu">
                {/* Logo e Título */}
                <div className="logo-container">
                    <AiFillDingtalkCircle className="logo-icon" />
                    {/* O h1 que você quer ocultar no mobile (apenas no CSS) */}
                    <h1 className="header-title">LojaTech</h1> 
                </div>

                {/* Botão Hambúrguer (Visível apenas no mobile, controlado por CSS) */}
                <button 
                    className="menu-toggle-btn" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </button>

                {/* Menu de Navegação. 
                  A classe 'menu-open' é aplicada para deslizar o menu (animação)
                */}
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