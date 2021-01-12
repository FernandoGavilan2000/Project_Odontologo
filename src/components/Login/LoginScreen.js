import React, { useContext, useState } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import '../../styles/Login/Login.css';

import logo from '../../assets/images/logo.svg';

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
		<div class="center">
			<div class="container">
				<div class="text">
					<img src={logo} alt="logo" />
					Login
				</div>
				<form action="#">
					<div class="data">
						<label>Email User</label>
						<input type="text" required />
					</div>
					<div class="data">
						<label>Password</label>
						<input type="password" required />
					</div>
					<div class="forgot-pass">
						<a href="#">Forgot Password?</a>
					</div>
					<div class="btn">
						<div class="inner"></div>
						<button type="submit" onClick={handleLogin}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
