import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontogramaFila.css';
import moment from 'moment';
import 'moment/locale/es';
function PacienteMenuOdontogramaFila({
	handleChangeArray,
	OdontogramaArray,
	fecha,
	setStatus,
	type,
	idOdonto,
}) {
	return (
		<div className="paciente-menu-odontograma-fila">
			{/* Fecha */}
			<p
				onClick={() => {
					handleChangeArray(OdontogramaArray);
					setStatus({
						type: type,
						idOdonto: idOdonto,
					});
				}}
				style={{ cursor: 'pointer' }}
			>
				{moment(fecha).local().format('L')}
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
