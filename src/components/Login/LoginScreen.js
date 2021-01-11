import React, { useContext, useState } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		const lastPath = localStorage.getItem('lastPathOdontologo') || '/app';

		dispatch({
			type: types.login,
			payload: {
				name: 'Fernando',
				type: 'odontologo',
			},
		});

		history.replace(lastPath);
	};
	return (
		<div>
			LoginScreen
			<div className="container mt-5">
				<h1>Login</h1>
				<hr />
				<br />
				Recuerda : Solo "odontologo" o "admin"
				<br />
				<button className="btn btn-primary" onClick={handleLogin}>
					Login
				</button>
			</div>
		</div>
	);
};
