import React, { useState, useRef, useEffect } from 'react';
import PacienteFila from './PacienteFila';

import '../../../styles/Odontologo/Pacientes/Pacientes.css';
import Swal from 'sweetalert2';

//Icon
import add from '../../../assets/images/add.svg';
import { NavLink } from 'react-router-dom';
import { Spinner } from '../../Tools/Spinner';

function Pacientes({ history }) {
	const [Patients, setPatients] = useState(null);
	const _isMounted = useRef(true);
	useEffect(() => {
		SearchPatients()
			.then((dataPacient) => {
				if (_isMounted.current) {
					setPatients(dataPacient);
				}
			})
			.catch((error) => {
				console.error('No se pudo obtener la lista de los pacientes', error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No hay registro de los Pacientes!',
				});
				history.replace('/app');
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);

	const SearchPatients = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/pacientes`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		return await response.json();
	};

	return (
		<div id="pacientesContenedor" className="pacientes-contenedor">
			<div className="title">
				<h2>Lista de Pacientes</h2>
				<button>
					<NavLink to="/app/pacientes/new">
						<img src={add} alt="add" />
						<span>Agregar Paciente</span>
					</NavLink>
				</button>
			</div>
			<div className="patients-table">
				{Patients ? (
					<table cellSpacing={0} cellPadding={0}>
						<thead>
							<tr>
								<th>PACIENTE</th>
								<th>EDAD</th>
								<th>TELEFONO</th>
								<th>EMAIL</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{Patients.map((patient, index) => (
								<PacienteFila patient={patient} key={patient.p_id} />
							))}
						</tbody>
					</table>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
}

export default Pacientes;
