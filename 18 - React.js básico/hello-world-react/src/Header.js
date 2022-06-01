import React from 'react';

// INTERPOLAÇÃO
function Header({ titulo, subtitulo }) {
    return (
        <header>
            {/* Mostrar uma variável do js no JSX */}
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}

export default Header;