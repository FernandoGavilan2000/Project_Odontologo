import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
	isAuthenticated,
	isTypeUser,
	component: Component,
	...rest
}) => {
	localStorage.setItem('lastPathOdontologo', rest.location.pathname);

	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<Component {...props} isTypeUser={isTypeUser} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};
