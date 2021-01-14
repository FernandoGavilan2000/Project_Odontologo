import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import '../../styles/Login/Login.css';

import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { SuccesfullLogin } from '../../helpers/Alerts/SuccessfulLogin';

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

		SuccesfullLogin();
	};
	return (
		<div className="login-center">
			<div className="login-container">
				<div className="text">
					<img src={logo} alt="logo" />
					Login
				</div>
				<form>
					<div className="data">
						<label>Email User</label>
						<input type="text" required />
					</div>
					<div className="data">
						<label>Password</label>
						<input type="password" required />
					</div>
					<div className="forgot-pass">
						<NavLink to="/help">Forgot Password?</NavLink>
					</div>
					<div className="btn">
						<div className="inner"></div>
						<button type="submit" onClick={handleLogin}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
