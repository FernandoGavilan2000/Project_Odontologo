import React, { useEffect, useState, useRef } from 'react';
import { NuevoTratamiento } from '../../../helpers/Alerts/NuevoTratamiento';
import { getDoctors } from '../../../helpers/Backend/getDoctors';
import { getTratamientosP } from '../../../helpers/Backend/getTratamientosP';
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTrat.css';
import { Spinner } from '../../Tools/Spinner';

import PacienteMenuPlanesTratFila from './PacienteMenuPlanesTratFila';

function PacienteMenuPlanesTrat({ Patient }) {
	//const [Doctors, setDoctors] = useState(null);
	const [Tratamientos, setTrataminetos] = useState(null);
	const _isMounted = useRef(true);
	const pacienteId = Patient;

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);
	/*
	useEffect(() => {
		getDoctors()
			.then((data) => {
				if (_isMounted.current) {
					console.log(data);
					setDoctors(data);
				}
			})
			.catch((error) => {
				console.info('Error con los doctores en Paciente-Tratamiento');
			});
	}, []);
	*/

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
						console.log(results.value);
					}
				});
			});
	}, []);

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
