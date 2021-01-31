import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';
import '../../styles/Login/Login.css';

import logo from '../../assets/images/logo.svg';
import { SuccesfullLogin } from '../../helpers/Alerts/SuccessfulLogin';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const [FormValues, handleForm, resetForm] = useForm({
		auth_user: '',
		auth_password: '',
	});

	const handleLogin = (e) => {
		e.preventDefault();
		//Hacer la verificacion en la API , confirmar autenticacion --> Tipo POST , responder con un 200 OK
		//Segundo: La Api debe devolver lo del payload
		const lastPath = localStorage.getItem('lastPathOdontologo') || '/app';

		dispatch({
			type: types.login,
			payload: {
				d_id: 1004,
				d_name: 'Fernando Ramiro',
				d_lastname: 'Gavilan Hernandez',
				type: 'admin',
				d_img:
					'https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg',
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
						<label>User Name</label>
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
