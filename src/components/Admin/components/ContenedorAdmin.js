import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { prueba } from '../prueba';

export const ContenedorAdmin = () => {
	return (
		<>
			<Switch>
				<Route exact path="/app/dashboard" component={prueba} />
				<Route exact path="/app/doctores" component={prueba} />
				<Route exact path="app/doctores/:id" component={prueba} />
				<Route exact path="app/cuentas" component={prueba} />
				<Route exact path="app/cuentas/id" component={prueba} />
				<Route exact path="app/perfil" component={prueba} />

				<Redirect to="/app/dashboard" />
			</Switch>
		</>
	);
};
