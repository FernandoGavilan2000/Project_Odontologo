import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTrat.css';

import PacienteMenuPlanesTratFila from './PacienteMenuPlanesTratFila';

function PacienteMenuPlanesTrat() {
	return (
		<div id="pacienteMenuPlanesTrat" className="paciente-menu-planes-trat">
			<div className="planestrat-tabla-top">
				<h4>Cod P. Tratamiento</h4>
				<h4>Nombre P.T </h4>
				<h4>Inicio</h4>
				<h4>Final</h4>
				<h4>Doctor</h4>
			</div>
			<div className="planestrat-tabla-datos contenedor-scroll">
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
				<PacienteMenuPlanesTratFila></PacienteMenuPlanesTratFila>
			</div>
		</div>
	);
}

export default PacienteMenuPlanesTrat;
