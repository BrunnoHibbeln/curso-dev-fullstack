import React from 'react';

import Header from './Header';
import Content from './Content';
import Card from './Card';
import Cards from './Cards';

// Importando imagens
import reactImg from './imagens/react.png';
import nextImg from './imagens/next.png';
import nodeImg from './imagens/node.png';

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
            <Content titulo="Bem-vindo">
                <h2></h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    
                <Cards>
                    <Card
                        imagem={reactImg}
                        titulo="React.js"
                        texto="ctionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"
                    />

                    <Card 
                        imagem={nextImg}
                        titulo="Next.js"
                        texto="ctionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"
                    />

                    <Card 
                        imagem={nodeImg}
                        titulo="Node.js"
                        texto="ctionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"
                    />
                </Cards>
            </Content>
        </>
    )
}

export default App;