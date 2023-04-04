import React from 'react';

export default function Contador() {

	// Alterando o estado;
	// Alterando as Props do estados;
	// Na criação e remoção dele.

	let contador = 0;
	const funcContador = () => {
		contador += 1;
	}

	return (
		<>
			<h1>Contador</h1>
			<button 
				type="button"
				onClick={ funcContador }
			>
				{contador}
			</button>
		</>
	)
}

