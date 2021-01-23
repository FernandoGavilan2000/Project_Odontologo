import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Home/Home.css';
import queryString from 'query-string';
import Swal from 'sweetalert2';

import { AlertForm } from '../../helpers/Alerts/HomeForm';

export const HomeScreen = () => {
	const Background =
		'https://images.pexels.com/photos/3884103/pexels-photo-3884103.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

	const handleSubmit = async () => {
		let form = await AlertForm();
		if (form.isConfirmed) {
			if (form.value[0].length >= 4 && form.value[1].length >= 9) {
				const newSolicitud = {
					s_fullname: form.value[0],
					s_cellphone: form.value[1],
					s_query: form.value[2],
				};
				try {
					const respuestaAPI = await fetch('http://localhost:4000/api/solicitudes', {
						method: 'POST',
						mode: 'no-cors',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: queryString.stringify(newSolicitud),
					});
					console.log(respuestaAPI);
					if (respuestaAPI.ok) {
						Swal.fire('BIEN GOOO :D !', 'LA API DE CANCINO WORKS!', 'success');
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Fzazo LA API FALLO',
							text: 'No se pudo enviar la Solicitud!',
						});
					}
				} catch (error) {
					console.error('LA API DE CANCINO FALLO :C', error);
					Swal.fire({
						icon: 'error',
						title: 'Fzazo LA API FALLO',
						text: 'No se pudo enviar la Solicitud!',
					});
				}
			}
		}
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
