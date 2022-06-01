                import React from 'react';
import Header from './Header'

/* 
    COMPONENTES - Criando e Usando

    - Import React
    - Função que retorna JSX
        - Sempre tem que ter um elemento pai, para isso podemos utilizar 'React fragment' = "<> </>"

    - Exportar função
    - Para usar o componente
        - importar
        - Usar com tag, exemplo: <App />

    Componentes podem receber propriedades, exemplo: <Header titulo="texto" />
*/

function App() {
    return (
        <>
            <Header titulo="teste" subtitulo="teste2" />
        </>
    )
}

export default App;