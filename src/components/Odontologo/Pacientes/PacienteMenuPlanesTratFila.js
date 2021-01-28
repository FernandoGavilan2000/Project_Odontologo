import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTratFila.css';
import moment from 'moment';
import 'moment/locale/es';
import { ShowDoctor } from '../../../helpers/Backend/ShowDoctor';
function PacienteMenuPlanesTratFila({ tratamiento }) {
	//let doctor = doctors.filter((doctor) => doctor.auth_id === tratamiento.tp_did);
	return (
		<div className="paciente-menu-planestrat-fila">
			{/* Cod plan de tratamiento */}
			<p>{tratamiento.tp_id}</p>

			{/* Cantidad de Citas */}
			<p>{tratamiento.tp_ndates}</p>

			{/* Inicio */}
			<p>{moment(tratamiento.tp_start).local().format('LL')}</p>

			{/* Final */}
			<p>{moment(tratamiento.tp_end).local().format('LL')}</p>

			{/* Doctor */}
			<p
				style={{ cursor: 'pointer' }}
				onClick={() => {
					ShowDoctor(tratamiento.tp_did);
				}}
			>
				{tratamiento.tp_did}
			</p>

			{/* Ver Detalles */}
		</div>
	);
}

export default PacienteMenuPlanesTratFila;
