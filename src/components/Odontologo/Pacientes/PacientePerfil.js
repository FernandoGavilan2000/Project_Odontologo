import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import '../../../styles/Odontologo/Pacientes/PacientePerfil.css';
import PacientePerfilInfo from './PacientePerfilInfo';
import PacientePerfilNav from './PacientePerfilNav';
import { Spinner } from '../../Tools/Spinner';

import PacienteMenuCitas from './PacienteMenuCitas';
import PacienteMenuDatPersonales from './PacienteMenuDatPersonales';
import PacienteMenuFacturacion from './PacienteMenuFacturacion';
import PacienteMenuOdontograma from './PacienteMenuOdontograma';
import PacienteMenuPlanesTrat from './PacienteMenuPlanesTrat';
import Swal from 'sweetalert2';

const menus = [
	'Datos Personales',
	'Citas',
	'Planes de Tratamiento',
	'Odontograma Actual',
	'Facturación',
];

function PacientePerfil({ history }) {
	const { pacientes_id } = useParams();
	console.log(pacientes_id);

	const [Patient, setPatient] = useState(null);
	const _isMounted = useRef(true);

	//Information del Paciente si existe

	useEffect(() => {
		SearchPatient(pacientes_id)
			.then((dataPacient) => {
				if (_isMounted.current) {
					setPatient(dataPacient);
				}
			})
			.catch((error) => {
				console.error('No se pudo encontrar al Paciente', error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No hay registro de este paciente!',
				});
				history.replace('/app/pacientes');
			});

		return () => {
			_isMounted.current = false;
		};
	}, [pacientes_id]);

	const SearchPatient = async (id_paciente) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/pacientes/${id_paciente}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await response.json();
	};

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
		<>
			{Patient ? (
				<div
					id="pacientePerfilContenedor"
					className="paciente-perfil-contenedor paciente-container"
				>
					<div className="paciente-menu">
						<PacientePerfilInfo Patient={Patient[0]}></PacientePerfilInfo>
						<PacientePerfilNav
							handleMenu={handleMenu}
							menusArray={menus}
							current={Menu}
						/>
					</div>

					<div id="pacientePerfilMenus" className="paciente-perfil-menus">
						{Menu.menuName === menus[0] && (
							<PacienteMenuDatPersonales Patient={Patient[0]} />
						)}
						{Menu.menuName === menus[1] && (
							<PacienteMenuCitas Patient={Patient[0].p_id} />
						)}
						{Menu.menuName === menus[2] && (
							<PacienteMenuPlanesTrat Patient={Patient[0].p_id} />
						)}
						{Menu.menuName === menus[3] && <PacienteMenuOdontograma />}
						{Menu.menuName === menus[4] && <PacienteMenuFacturacion />}
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
}

export default PacientePerfil;
