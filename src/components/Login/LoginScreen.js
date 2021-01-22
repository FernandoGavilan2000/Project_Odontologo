import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import '../../styles/Login/Login.css';

import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { SuccesfullLogin } from '../../helpers/Alerts/SuccessfulLogin';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const [FormValues, handleForm, resetForm] = useForm({
		email: '',
		password: '',
	});

	const handleLogin = (e) => {
		e.preventDefault();
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
						<input
							type="text"
							name="email"
							required
							onChange={handleForm}
							autoComplete="off"
						/>
					</div>
					<div className="data">
						<label>Password</label>
						<input
							type="password"
							name="password"
							required
							onChange={handleForm}
							autoComplete="off"
						/>
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
