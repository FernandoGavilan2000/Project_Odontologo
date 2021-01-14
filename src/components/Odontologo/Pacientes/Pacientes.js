import React from 'react';
import PacienteFila from './PacienteFila';

import '../../../styles/Odontologo/Pacientes/Pacientes.css';

//Icon
import add from '../../../assets/images/add.svg';
import { NavLink } from 'react-router-dom';

function Pacientes() {
	return (
		<div id="pacientesContenedor" class="pacientes-contenedor">
			<div className="title">
				<h2>Lista de Pacientes</h2>
				<button>
					<NavLink to="/app/pacientes/new">
						<img src={add} alt="add" />
						<span>Agregar Paciente</span>
					</NavLink>
				</button>
			</div>
			<div className="patients-table">
				<table cellSpacing={0} cellPadding={0}>
					<thead>
						<tr>
							<th>PACIENTE</th>
							<th>EDAD</th>
							<th>TELEFONO</th>
							<th>ULT.VISITA</th>
							<th>BALANCE</th>
							<th />
						</tr>
					</thead>
					<tbody >
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
						<PacienteFila></PacienteFila>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Pacientes;
