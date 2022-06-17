
// Sempre que tivermos que manipular o estado de um componente, devemos usar o 'useState'. Importamos da seguinte forma:
import React, { useState, useEffect } from 'react';// Dessa forma o 'useState' se torna uma método

import Template from './Template'
import './Counter.css';

const Counter = () => {

	// É muito importante ressaltar que toda vez que mudamos o estado de um elemento, ou seja, chamamos o 'useState'o react irá redenrizar novamente a aplicação.
	const [contador, setContador] = useState(0)

	// No 'useEffect' o primeiro parâmetro é uma função de callback e o segundo é um array de dependências
	useEffect(() => {
		console.log('renderizou') // O callback sempre será executado ao carregar o componente pela primeira vez
	}, [contador]) // Nesse exemplo passamos a variável 'contador' como dependência, assim toda vez que ela for alterada, será executado o callback.

	const handleOnClick = (operador) => {

		let novoValor = operador === '+'
			? contador + 1
			: contador - 1

		// Chamamos o useState e logo em seguida o JSX é renderizado novamente
		setContador(novoValor)
	}

	return (
		<>
			<div className="counter">
				<span>{contador}</span>
				<button onClick={() => handleOnClick('-')}>-</button>
				<button onClick={() => handleOnClick('+')}>+</button>
			</div>
		</>
	);
}

export default Counter;
