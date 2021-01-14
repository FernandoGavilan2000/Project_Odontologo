import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Home/Home.css';

import { AlertForm } from '../../helpers/Alerts/HomeForm';

export const HomeScreen = () => {
	const Background =
		'https://images.pexels.com/photos/3884103/pexels-photo-3884103.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

	const handleSubmit = async () => {
		let inputs = await AlertForm();
		console.log(inputs);
	};

	return (
		<div className="Home-Container">
			<div className="navbar1">
				<div>
					<NavLink to="/">Inicio</NavLink>
				</div>
				<div>
					<NavLink to="/">Tratamientos</NavLink>
				</div>
				<div>
					<NavLink to="/">Precios</NavLink>
				</div>
				<div>
					<NavLink to="/">Contacto</NavLink>
				</div>
				<div>
					<NavLink to="/login">Login o Volver</NavLink>
				</div>
			</div>

			<div
				className="Home_presentation"
				style={{ backgroundImage: 'url(' + Background + ')' }}
			>
				<h1>DentalHealth</h1>
				<p>Reserva una cita , Totalmente Gratis</p>
				<button onClick={handleSubmit}>Ingresa Aqui</button>
			</div>

			<h1>Despues todo el Contenido...</h1>
		</div>
	);
};
