import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../../../styles/Odontologo/Contenedor.css';

// Menus: Inicio , Horarios, Pacientes,PacientePerfil,OdontologoPerfil
import Inicio from '../Inicio/Inicio.js';
import Horario from '../Horario/Horario.js';
import Pacientes from '../Pacientes/Pacientes.js';
import PacientePerfil from '../Pacientes/PacientePerfil.js';
import { OdontologoPerfil } from '../Perfil/OdontologoPerfil';
import { HorarioModal } from '../Horario/HorarioModal';
import { PacienteRegistro } from '../Pacientes/PacienteRegistro';

function Contenedor() {
	return (
		<div id="contenedorPrincipal">
			<Switch>
				<Route exact path="/app/inicio" component={Inicio} />
				<Route exact path="/app/horarios" component={Horario} />
				<Route exact path="/app/horarios/:horario_id" component={HorarioModal} />
				<Route exact path="/app/pacientes/new" component={PacienteRegistro} />
				<Route exact path="/app/pacientes/:pacientes_id" component={PacientePerfil} />
				<Route exact path="/app/pacientes" component={Pacientes} />

				<Route exact path="/app/perfil" component={OdontologoPerfil} />

				<Redirect to="/app/inicio" />
			</Switch>
		</div>
	);
}

export default Contenedor;
