import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuCitasFila.css';

import see from '../../../assets/images/see.svg';

const styleShowMore = {
	backgroundColor: '#FFFF',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'var(--second-color-dark)',
	gap: '7px',
	cursor: 'pointer',
};

function PacienteMenuCitasFila() {
	return (
		<div className="paciente-menu-citas-fila">
			{/* Fecha */}
			<p>20 Dic 2020</p>

			{/* Hora */}
			<p>08:00pm</p>

			{/* Plan de Tratamiento */}
			<p>Ortodoncia</p>

			{/* Dentista */}
			<p>Courtney Henry</p>

			{/* Comentarios */}

			<div>
				<button style={styleShowMore}>
					<img src={see} alt="see" />
					<span>Ver Comentario</span>
				</button>
			</div>
		</div>
	);
}

export default PacienteMenuCitasFila;
