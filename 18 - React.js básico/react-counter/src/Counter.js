
// Sempre que tivermos que manipular o estado de um componente, devemos usar o 'useState'. Importamos da seguinte forma:
import React, { useState } from 'react';// Dessa forma o 'useState' se torna uma método

import './Counter.css';

const Counter = () => {

  // É muito importante ressaltar que toda vez que mudamos o estado de um elemento, ou seja, chamamos o 'useState'o react irá redenrizar novamente a aplicação.
  const [contador, setContador] = useState(0)

  const handleOnClick = (operador) => {
    
    let novoValor = operador === '+'
    ? contador + 1
    : contador - 1

    // Chamamos o useState e logo em seguida o JSX é renderizado novamente
    setContador(novoValor)
  }

  return (
    <div className="counter">
        <span>{contador}</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  );
}

export default Counter;
