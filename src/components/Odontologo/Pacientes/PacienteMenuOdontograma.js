import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontograma.css';
import PacienteMenuOdontogramaFila from './PacienteMenuOdontogramaFila';

import { ArrayDiente } from '../../../helpers/Odontograma/ArrayDiente';
import { Odontograma } from './Odontograma';

function PacienteMenuOdontograma() {
	return (
		<div id="pacienteMenuOdontograma" className="paciente-menu-odontograma">
			<div className="odontograma-tabla-top">
				<h4>Lista</h4>
				<h4>Reciente Odontograma</h4>
			</div>
			<div className="odontograma-tabla-data">
				{/* Lista actualizaciones */}

				<div className="lista-actualizaciones contenedor-scroll">
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
				</div>

				<Odontograma ArrayDiente={ArrayDiente} />
			</div>
		</div>
	);
}

export default PacienteMenuOdontograma;
