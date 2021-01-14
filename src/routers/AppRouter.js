import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

//Tipos de Rutas
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//Screens Principales
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

//Context
import { AuthContext } from '../auth/AuthContext';
import { RecoverPassword } from '../components/Help/RecoverPassword';
import { Page404 } from '../components/Page404/Page404';

export const AppRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Switch>
				<Route exact component={HomeScreen} path="/" />

				<Route exact component={RecoverPassword} path="/help" />
				<PublicRoute
					exact
					path="/login"
					component={LoginScreen}
					isAuthenticated={user.logged}
					isTypeUser={user.type}
				/>
				<PrivateRoute
					path="/app"
					component={DashboardRoutes}
					isAuthenticated={user.logged}
					isTypeUser={user.type}
				/>
				<Route exact component={Page404} path="/404" />

				<Redirect to="/404" />
			</Switch>
		</Router>
	);
};
