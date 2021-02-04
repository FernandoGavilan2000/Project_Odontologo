import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import '../../styles/Login/Login.css';

import logo from '../../assets/images/logo.svg';
import { SuccesfullLogin } from '../../helpers/Alerts/SuccessfulLogin';
import { useForm } from '../../hooks/useForm';
import { authLogin } from '../../helpers/Backend/authLogin';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const [FormValues, handleForm, resetForm] = useForm({
		auth_user: '',
		auth_password: '',
	});

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			//console.log(FormValues);
			const LoginUser = await authLogin(FormValues.auth_user, FormValues.auth_password);

			const lastPath = localStorage.getItem('lastPathOdontologo') || '/app';

			if (LoginUser.logged) {
				console.log('AQQUII SI EXISTE');
				dispatch({
					type: types.login,
					payload: {
						...LoginUser,
					},
				});
			} else {
				dispatch({
					type: types.logout,
				});
				resetForm();
			}

			/*
			dispatch({
				type: types.login,
				payload: {
					d_id: 1004,
					d_name: 'Fernando Ramiro',
					d_lastname: 'Gavilan Hernandez',
					type: 'odontologo',
					d_img:
						'https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg',
				},
			});
			*/

			history.replace(lastPath);

			SuccesfullLogin();
		} catch (error) {
			console.log(error);
			dispatch({
				type: types.logout,
			});
			resetForm();
		}
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
						<label>User Name</label>
						<input
							type="text"
							name="auth_user"
							required
							onChange={handleForm}
							autoComplete="off"
						/>
					</div>
					<div className="data">
						<label>Password</label>
						<input
							type="password"
							name="auth_password"
							required
							onChange={handleForm}
							autoComplete="off"
						/>
					</div>
					<div className="btn">
						<div className="inner"></div>
						<button type="submit" onClick={handleLogin}>
							<span>Login</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
