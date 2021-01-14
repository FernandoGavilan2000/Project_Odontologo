import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AdminDashboard } from '../Dashboard/AdminDashboard';
import { Cuentas } from '../Dinero/Cuentas';
import { Doctores } from '../Doctores/Doctores';
import { DoctorInfo } from '../Doctores/DoctorInfo';

export const ContenedorAdmin = () => {
	return (
		<div id="contenedorPrincipal">
			<Switch>
				<Route exact path="/app/dashboard" component={AdminDashboard} />
				<Route exact path="/app/doctores" component={Doctores} />
				<Route exact path="/app/doctores/:id" component={DoctorInfo} />
				<Route exact path="/app/cuentas" component={Cuentas} />

				<Redirect to="/app/dashboard" />
			</Switch>
		</div>
	);
};
