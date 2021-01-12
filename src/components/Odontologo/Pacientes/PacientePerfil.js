import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfil.css';
import PacientePerfilInfo from './PacientePerfilInfo';
import PacientePerfilNav from './PacientePerfilNav';

import PacienteMenuCitas from './PacienteMenuCitas';
import PacienteMenuDatPersonales from './PacienteMenuDatPersonales';
import PacienteMenuFacturacion from './PacienteMenuFacturacion';
import PacienteMenuOdontograma from './PacienteMenuOdontograma';
import PacienteMenuPlanesTrat from './PacienteMenuPlanesTrat';

const menus = [
	'Datos Personales',
	'Citas',
	'Planes de Tratamiento',
	'Odontograma Actual',
	'Facturación',
];

function PacientePerfil() {
	const [Menu, setMenu] = useState({
		menuName: menus[0],
		menuCod: 0,
	});

	const handleMenu = (name_menu, cod_menu) => {
		setMenu({
			menuName: name_menu,
			menuCod: cod_menu,
		});
	};

	return (
		<div
			id="pacientePerfilContenedor"
			className="paciente-perfil-contenedor paciente-container"
		>
			<div className="paciente-menu">
				<PacientePerfilInfo></PacientePerfilInfo>
				<PacientePerfilNav handleMenu={handleMenu} menusArray={menus} current={Menu} />
			</div>

			<div id="pacientePerfilMenus" className="paciente-perfil-menus">
				{Menu.menuName === menus[0] && <PacienteMenuDatPersonales />}
				{Menu.menuName === menus[1] && <PacienteMenuCitas />}
				{Menu.menuName === menus[2] && <PacienteMenuPlanesTrat />}
				{Menu.menuName === menus[3] && <PacienteMenuOdontograma />}
				{Menu.menuName === menus[4] && <PacienteMenuFacturacion />}
			</div>
		</div>
	);
}

export default PacientePerfil;
