import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuCitasFila.css';
import moment from 'moment';
import 'moment/locale/es';

import see from '../../../assets/images/see.svg';

import Swal from 'sweetalert2';
//import { useHistory } from 'react-router-dom';

const styleShowMore = {
	backgroundColor: '#FFFF',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'var(--second-color-dark)',
	gap: '7px',
	cursor: 'pointer',
};

function PacienteMenuCitasFila({ cita, setUpdate }) {
	//const history = useHistory();
	const DeleteCita = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/citas/${cita.c_id}`,
			{
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await response.json();
	};

	const ShowDetails = async () => {
		Swal.fire({
			title: `${cita.c_title}`,
			text: `Descripcion: ${cita.c_description}`,
			icon: 'info',
			footer: `Inicio: ${moment(cita.c_start).local().format('LLL')} <br/> Fin: ${moment(
				cita.c_end
			)
				.local()
				.format('LLL')}`,
			showCancelButton: true,
			confirmButtonColor: '#FF4034',
			cancelButtonColor: '#1d47cd',
			confirmButtonText: 'Eliminar Cita!',
			cancelButtonText: 'Regresar',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Seguro de Eliminar esta Cita?',
					text: '¡No podrás revertir esto! ',
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#FF4034',
					cancelButtonColor: '#1d47cd',
					confirmButtonText: 'Si,Confirmar!',
				}).then((result) => {
					if (result.isConfirmed) {
						DeleteCita()
							.then((response) => {
								setUpdate(true);
								Swal.fire('Eliminado!', 'Se borro correctamente la cita', 'success');
								//history.replace(`/app/pacientes/${cita.c_pid}`);
							})
							.catch((error) => {
								Swal.fire('Oops...!', 'No se puedo eliminar la cita.', 'error');
							});
					}
				});
			}
		});
	};
	return (
		<div className="paciente-menu-citas-fila">
			{/* ID_Cita */}
			<p>{cita.c_id}</p>

			{/* ID_Tratamiento*/}
			<p>{cita.c_tpid}</p>

			{/* Hora Inicio*/}
			<p>{moment(cita.c_start).local().format('LLL')}</p>

			{/* Status*/}
			<p>{cita.c_status}</p>

			{/* Comentarios */}

			<div>
				<button style={styleShowMore} onClick={ShowDetails}>
					<img src={see} alt="see" style={{ marginRight: '0' }} />
					<span>Ver Comentario</span>
				</button>
			</div>
		</div>
	);
}

export default PacienteMenuCitasFila;
