import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTratFila.css';

function PacienteMenuPlanesTratFila({ tratamiento }) {
	//let doctor = doctors.filter((doctor) => doctor.auth_id === tratamiento.tp_did);
	return (
		<div className="paciente-menu-planestrat-fila">
			{/* Cod plan de tratamiento */}
			<p>{tratamiento.tp_id}</p>

			{/* Cantidad de Citas */}
			<p>{tratamiento.tp_ndates}</p>

			{/* Inicio */}
			<p>{tratamiento.tp_start}</p>

			{/* Final */}
			<p>{tratamiento.tp_end}</p>

			{/* Doctor */}
			<p>{tratamiento.tp_did}</p>

			{/* Ver Detalles */}
		</div>
	);
}

export default PacienteMenuPlanesTratFila;
