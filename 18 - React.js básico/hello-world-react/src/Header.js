import React from 'react';
import './Header.css'

// INTERPOLAÇÃO
function Header({ titulo, subtitulo }) {
    return (
        /* Ao adicionar uma classe para o elemento no JSX, ao invés de escrevermos "class=" devemos obrigatoriamente escrever "className=" */
        <header className="header">
            {/* Mostrar uma variável do js no JSX */}
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}

export default Header;