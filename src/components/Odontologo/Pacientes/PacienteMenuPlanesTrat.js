import React, { useEffect, useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NuevoTratamiento } from '../../../helpers/Alerts/NuevoTratamiento';
import { AuthContext } from '../../../auth/AuthContext';
import { getTratamientosP } from '../../../helpers/Backend/getTratamientosP';
import { NewTratamiento } from '../../../helpers/Backend/NewTratamiento';
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTrat.css';
import { Spinner } from '../../Tools/Spinner';
import Swal from 'sweetalert2';

import PacienteMenuPlanesTratFila from './PacienteMenuPlanesTratFila';
import { NewFactura } from '../../../helpers/Backend/NewFactura';

function PacienteMenuPlanesTrat({ Patient }) {
	//const [Doctors, setDoctors] = useState(null);
	const [Tratamientos, setTrataminetos] = useState(null);
	const { user } = useContext(AuthContext);
	const _isMounted = useRef(true);
	const history = useHistory();
	const pacienteId = Patient;

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		getTratamientosP(pacienteId)
			.then((data) => {
				if (_isMounted.current) {
					setTrataminetos(data);
				}
			})
			.catch((error) => {
				console.error(`No se encontraron tratamientos del paciente:${pacienteId}`);
				NuevoTratamiento().then((results) => {
					if (results.value) {
						Swal.fire({
							title: 'Creando Nuevo Tratamiento',
							text: 'Por favor espere...',
							allowOutsideClick: false,
							showCancelButton: false,
							showConfirmButton: false,
							willOpen: () => {
								Swal.showLoading();
							},
						});
						NewTratamiento(
							user.d_id,
							pacienteId,
							parseInt(results.value[0]),
							results.value[1],
							results.value[2],
							parseInt(results.value[3]),
							results.value[4]
						)
							.then((respuestaId) => {
								NewFactura(respuestaId, pacienteId, user.d_id, parseInt(results.value[0]))
									.then((response) => {
										if (response.ok) {
											history.replace(`/app/pacientes/${pacienteId}`);
											console.log('NUEVO TRATAMIENTO Y FACTURA CREADO');
											Swal.close();
											Swal.fire({
												icon: 'success',
												title: 'Nuevo Tratamiento Creado con Exito!',
												text: 'Se registro correctamente!',
											});
										} else {
											history.replace(`/app/pacientes/${pacienteId}`);
											Swal.close();
											Swal.fire({
												icon: 'error',
												title: 'No se pudo crear el Tratamiento',
												text: 'Intentelo Nuevamente,Ingrese bien los Datos',
											});
											console.info('NO SE PUDO CREAR EL TRATAMIENTO Y FACTURA ');
										}
									})
									.catch((error) => {
										history.replace(`/app/pacientes/${pacienteId}`);
										Swal.close();
										Swal.fire({
											icon: 'info',
											title: 'No se pudo crear la Factura del Tratamiento',
											text: 'Comunicarse con el Admin o Supervisor',
										});
										console.info('Error con la creacion del Factura');
									});
							})
							.catch((error) => {
								history.replace(`/app/pacientes/${pacienteId}`);
								Swal.close();
								Swal.fire({
									icon: 'error',
									title: 'No se pudo crear el Tratamiento',
									text: 'Intentelo Nuevamente,Ingrese bien los Datos',
								});
								console.info('No se pudo crear el Tratamiento');
							});
					} else {
						Swal.close();
						history.replace(`/app/pacientes/${pacienteId}`);
					}
				});
			});
	}, [history, pacienteId, user.d_id]);

	return (
		<div id="pacienteMenuPlanesTrat" className="paciente-menu-planes-trat">
			<div className="planestrat-tabla-top">
				<h4>Cod P. Tratamiento</h4>
				<h4>N_Citas Trazadas</h4>
				<h4>Inicio</h4>
				<h4>Final</h4>
				<h4>Doctor</h4>
			</div>
			<div className="planestrat-tabla-datos contenedor-scroll">
				{Tratamientos ? (
					<>
						{Tratamientos.map((tratamiento, index) => (
							<PacienteMenuPlanesTratFila
								tratamiento={tratamiento}
								key={tratamiento.tp_id}
							/>
						))}
					</>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
}

export default PacienteMenuPlanesTrat;
