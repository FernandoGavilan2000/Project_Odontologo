import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontogramaFila.css';

function PacienteMenuOdontogramaFila({ handleChangeArray, OdontogramaArray, fecha }) {
	return (
		<div className="paciente-menu-odontograma-fila">
			{/* Fecha */}
			<p
				onClick={() => {
					handleChangeArray(OdontogramaArray);
				}}
			>
				{fecha}
			</p>

			{/* Ver Detalles */}
			{/*
				<div>
					<button style={styleShowMore}>
						<img src={see} alt="see" />
						<span>Ver Detalles</span>
					</button>
				</div>
				*/}
		</div>
	);
}

export default PacienteMenuOdontogramaFila;
