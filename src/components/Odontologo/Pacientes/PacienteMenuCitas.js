import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/Odontologo/Pacientes/PacienteMenuCitas.css';
import { Spinner } from '../../Tools/Spinner';
import Swal from 'sweetalert2';
import PacienteMenuCitasFila from './PacienteMenuCitasFila';

function PacienteMenuCitas({ Patient }) {
	const [Citas, setCitas] = useState(null);
	const _isMounted = useRef(true);
	const history = useHistory();

	useEffect(() => {
		SearchAppointment(Patient)
			.then((dataPacient) => {
				if (_isMounted.current) {
					setCitas(dataPacient);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar las Citas del Paciente', error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No hay registro de citas!',
				});
				history.replace(`/app/pacientes/${Patient}`);
			});

		return () => {
			_isMounted.current = false;
		};
	}, [Patient, history]);

	const SearchAppointment = async (id_paciente) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/citas/paciente/${id_paciente}`,
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
	return (
		<div id="pacienteMenuCitas" className="paciente-menu-citas">
			<div className="cita-tabla-top">
				<h4>ID Cita</h4>
				<h4>ID Tratamiento</h4>
				<h4>Hora</h4>
				<h4>Estado</h4>
				<h4>Comentarios</h4>
			</div>
			<div className="cita-tabla-datos contenedor-scroll">
				{Citas ? (
					Citas.map((cita, index) => (
						<PacienteMenuCitasFila cita={cita} key={cita.c_id} />
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
}

export default PacienteMenuCitas;

//Lista de planes de tratamiento
//-----------------------
//Cod plan de tratamiento
//Nombre P.T
//Inicio
//Final
//Doctor
//Comentario
