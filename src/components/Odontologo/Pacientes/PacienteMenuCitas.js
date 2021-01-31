import React, { useRef, useState, useEffect, useContext } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuCitas.css';
import { Spinner } from '../../Tools/Spinner';
import add from '../../../assets/images/add.svg';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../auth/AuthContext';
import PacienteMenuCitasFila from './PacienteMenuCitasFila';
import { NewCita } from '../../../helpers/Backend/NewCita';
import { CreateNewCita } from '../../../helpers/Backend/CreateNewCita';
import { useHistory } from 'react-router-dom';

function PacienteMenuCitas({ Patient }) {
	const [Citas, setCitas] = useState(null);
	const _isMounted = useRef(true);
	const [Update, setUpdate] = useState(false);
	const { user } = useContext(AuthContext);
	//const history = useHistory();

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
			});
	}, [Update]);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

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

	const CreateNewCitaAdd = async () => {
		NewCita()
			.then((data) => {
				if (data.value) {
					console.log(data.value);
					CreateNewCita(
						parseInt(data.value[0]),
						Patient,
						user.d_id,
						data.value[1],
						data.value[2],
						data.value[3],
						data.value[4]
					)
						.then((response) => {
							if (response.ok) {
								setUpdate(true);
								Swal.close();
								Swal.fire({
									icon: 'success',
									title: 'Nueva Cita Creada con Exito!',
									text: 'Se registro correctamente!',
								});
							} else {
								Swal.close();
								Swal.fire({
									icon: 'error',
									title: 'Oopsss!',
									text: 'No se pudo registrar la Cita!',
								});
							}
						})
						.catch((error) => {
							Swal.close();
							Swal.fire({
								icon: 'error',
								title: 'Oopsss!',
								text: 'No se pudo registrar la Cita!',
							});
						});
				}
			})
			.catch((error) => {
				console.info('El usuario descarto el formulario Nueva Cita');
				Swal.close();
				Swal.fire({
					icon: 'warning',
					title: 'Error al Ingresar la Informacion',
					text: 'Por favor, intentelo de Nuevo',
				});
			});
	};
	return (
		<>
			<button onClick={CreateNewCitaAdd}>
				<img alt="see" src={add} />
				<span>NUEVA CITA</span>
			</button>
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
						Citas.sort(
							(a, b) => parseInt(b.c_id) - parseInt(a.c_id)
						).map((cita, index) => (
							<PacienteMenuCitasFila cita={cita} key={cita.c_id} setUpdate={setUpdate} />
						))
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</>
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
