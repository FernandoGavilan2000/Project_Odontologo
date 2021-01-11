import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

//Style global prueba
import './styles/globalStyle.css';

export const OdontologoApp = () => {
	const init = () => {
		return JSON.parse(localStorage.getItem('userOdontologo')) || { logged: false };
	};

	const [user, dispatch] = useReducer(authReducer, {}, init);

	/*
	let user = {
		type: 'odontologo',
		logged: true,
	};
	*/
	useEffect(() => {
		localStorage.setItem('userOdontologo', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
