import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontogramaFila.css';
import see from '../../../assets/images/see.svg';

const styleShowMore = {
	backgroundColor: '#FFFF',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'var(--second-color-dark)',
	gap: '7px',
	cursor: 'pointer',
	fontWeight: 'bolder',
};

function PacienteMenuOdontogramaFila() {
	return (
		<div className="paciente-menu-odontograma-fila">
			{/* Fecha */}
			<p>20 Dic 2020</p>

			{/* Ver Detalles */}
			<div>
				<button style={styleShowMore}>
					<img src={see} alt="see" />
					<span>Ver Detalles</span>
				</button>
			</div>
		</div>
	);
}

export default PacienteMenuOdontogramaFila;
