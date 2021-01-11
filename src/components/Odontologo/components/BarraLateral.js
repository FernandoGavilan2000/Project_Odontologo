import React, { useContext } from 'react';
import '../../../styles/Odontologo/BarraLateral.css';

//Icons
import logo from '../../../assets/images/logo.svg';
import home from '../../../assets/images/home.svg';
import calendar from '../../../assets/images/calendar.svg';
import patients from '../../../assets/images/patients.svg';
import profile from '../../../assets/images/profile.svg';
import logout from '../../../assets/images/logout.svg';

//Navegar

import { useHistory, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

function BarraLateral() {
	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {
		history.replace('/login');

		dispatch({
			type: types.logout,
		});
	};
	return (
		<ul id="sideBar" className="nav-bar">
			<img src={logo} className="logo" alt="logo" />
			<li className="nav-item">
				<NavLink to="/app/inicio" activeClassName="selected">
					<span>Inicio</span>
					<img src={home} alt="home" />
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/app/horarios" activeClassName="selected">
					<span>Horarios</span>
					<img src={calendar} alt="calendar" />
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/app/pacientes" activeClassName="selected">
					<span>Pacientes</span>
					<img src={patients} alt="patients" />
				</NavLink>
			</li>
			<div className="user-doctor">
				{/* <!-- Doctor Picture --> */}
				<img
					src="https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg"
					alt="doctor"
					className="doctor-picture"
				/>
				{/* <!-- Doctor Name --> */}
				<h3 className="doctor-name">{name}</h3>
				<a className="nav-link nav-link-profile nav-link-ver-perfil">
					<img src={profile} alt="profile" />
					<span>Ver Perfil</span>
				</a>
				<a className="nav-link nav-link-profile nav-link-cerrar-sesion">
					<img src={logout} alt="log-out" />
					<span onClick={handleLogout}>Cerrar Sesión</span>
				</a>
			</div>
		</ul>
	);
}

export default BarraLateral;
