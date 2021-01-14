import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuCitas.css';

import PacienteMenuCitasFila from './PacienteMenuCitasFila'

function PacienteMenuCitas() {
	return (
		<div id="pacienteMenuCitas" className="paciente-menu-citas">
			<div className="cita-tabla-top">
				<h4>Fecha</h4>
				<h4>Hora</h4>
				<h4>Tratamiento</h4>
				<h4>Dentista</h4>
				<h4>Comentarios</h4>
			</div>
			<div className="cita-tabla-datos contenedor-scroll">
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
				<PacienteMenuCitasFila></PacienteMenuCitasFila>
			</div>
		</div>
	);
}

export default PacienteMenuCitas;


//Lista de planes de tratamiento
//-----------------------
//Cod plan de tratamiento
//Nombre P.T 
//Inicio
//Final
//Doctor
//Comentario