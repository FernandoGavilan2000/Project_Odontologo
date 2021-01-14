import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import '../../../styles/Admin/AdminBarraLateral.css';
import logo from '../../../assets/images/logo.svg';
import profile from '../../../assets/images/profile.svg';
import dashboard from '../../../assets/images/dashboard.svg';
import doctos from '../../../assets/images/doctors.svg';
import money from '../../../assets/images/money.svg';
import logout from '../../../assets/images/logout.svg';

import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

export const BarraLateralAdmin = () => {
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
				<NavLink to="/app/dashboard" activeClassName="selected">
					<span>Dashboard</span>
					<img src={dashboard} alt="home" />
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/app/doctores" activeClassName="selected">
					<span>Doctores</span>
					<img src={doctos} alt="calendar" />
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/app/cuentas" activeClassName="selected">
					<span>Cuentas</span>
					<img src={money} alt="patients" />
				</NavLink>
			</li>
			<div className="user-doctor">
				<img
					src="https://images.pexels.com/photos/5380647/pexels-photo-5380647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="doctor"
					className="doctor-picture"
				/>

				<h3 className="doctor-name">{name}</h3>

				<NavLink to="/" activeClassName="selected" onClick={handleLogout}>
					<img src={logout} alt="log-out" />
					<span> Cerrar Sesión</span>
				</NavLink>
			</div>
		</ul>
	);
};
