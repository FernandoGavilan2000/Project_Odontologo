import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfilNav.css';

function PacientePerfilNav({ handleMenu, menusArray, current }) {
	return (
		<ul id="pacientePerfilNav" className="paciente-nav">
			{menusArray.map((menu, index) => (
				<li
					className={`paciente-nav-item ${current.menuCod === index && 'active'}`}
					onClick={() => {
						handleMenu(menu, index);
					}}
				>
					<span>{menu}</span>
					<div className="active-menu" />
				</li>
			))}
		</ul>
	);
}

export default PacientePerfilNav;
