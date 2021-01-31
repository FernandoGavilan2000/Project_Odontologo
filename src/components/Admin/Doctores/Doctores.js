import React, { useState, useEffect, useRef } from 'react';
import { getDoctors } from '../../../helpers/Backend/getDoctors';
import '../../../styles/Admin/Doctores.css';
import DoctorCard from './DoctorCard';
import { Spinner } from '../../Tools/Spinner';

export const Doctores = () => {
	const [Doctores, setDoctores] = useState(null);
	const _isMounted = useRef(true);

	useEffect(() => {
		getDoctors()
			.then((dataDoctors) => {
				if (_isMounted.current) {
					setDoctores(dataDoctors);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar los doctores-admin', error);
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);

	return (
		<div id="doctoresSeccion" className="doctores-seccion">
			<h1>Lista de Odontologos</h1>
			<div className="grid-doctores contenedor-scroll">
				{Doctores ? (
					<>
						{Doctores.map((doctor, index) => (
							<DoctorCard doctor={doctor} key={doctor.d_id} />
						))}
					</>
				) : (
					<Spinner />
				)}
				{/* <div className="card-doctor">
					<img src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="doctor-image" />
					<h4>Medico Cirujano</h4>
					<p className="doctor-name" >Annetter Kathyrn</p>
					<p className="doctor-code" > Codigo: <span>6514-1622</span></p>
				</div> */}
			</div>
		</div>
	);
};
