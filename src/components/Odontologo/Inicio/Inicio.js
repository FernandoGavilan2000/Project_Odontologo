import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/Odontologo/Inicio/OdontologoInicio.css';
import see from '../../../assets/images/see.svg';
import { InicioPacienteRow } from './InicioPacienteRow';

function Inicio() {
	return (
		<div id="inicioContenedor" class="inicio-contenedor">
			<h1>
				Bienvenido : <span>Fernando</span>
			</h1>
			<br />
			<div className="title">
				<h2>Tus proximas citas :</h2>
				<button>
					<NavLink to="/app/pacientes/new">
						<img src={see} alt="see" />
						<span>Ver todas</span>
					</NavLink>
				</button>
			</div>
			<div className="patients-table">
				<table cellSpacing={0} cellPadding={0}>
					<thead>
						<tr>
							<th>PACIENTE</th>
							<th>TELEFONO</th>
							<th />
						</tr>
					</thead>
					<tbody>
						<InicioPacienteRow />
						<InicioPacienteRow />
						<InicioPacienteRow />
					</tbody>
				</table>
			</div>
			<br />
			<h2>Comunicados :</h2>
		</div>
	);
}

export default Inicio;
